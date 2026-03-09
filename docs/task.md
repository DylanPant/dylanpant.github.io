# Tiktoken-rs Task Documentation

> This document provides step-by-step instructions for integrating tokenization into your projects and projecting API costs via the terminal.

If you are a Backend or Software Engineer with technical experience looking to build an application, follow the Developer Integration sections. Otherwise, follow the CLI Operations sections for analyzing queries and cost estimation.

## What You Will Need

Before starting either tutorial, ensure your machine and environment meet these requirements:

- Rust Toolchain: Install `rustc` and `cargo` (version 1.6+) from [rustup.rs](https://rustup.rs)

- Internet Access: Required for the initial build and dependencies

- CLI Access: A shell environment (e.g. MacOS Terminal, Windows PowerShell, etc.)

## Developer Integration

> Goal: Calculate token costs within a Rust app to ensure queries fit within a model’s context window.

### 1. Initialize Your Project and Dependencies

Open your terminal and create a new project

```bash
cargo new my_tokenizer && cd my_tokenizer
```

Add this library and anyhow to your `Cargo.toml` dependencies

```bash
cargo add tiktoken-rs anyhow
```

Use `cargo check` to verify your crates and sub-dependencies are indexed

### 2. Instantiate the Encoder

Before you can encode or decode, you must load a specific model vocab and encoding.

Open src/main.rs

Implement a function that returns the correct CoreBPE vocabulary based on the model you’ve selected

```rust
Use tiktoken-rs::{cl100k_base, p50k_base, CoreBPE}
Use anyhow::{Result, Context}

fn get_encoder_for_model(mode: &str) -> Result<CoreBPE> {
    match model {
    	“gpt-4” | “gpt-3.5-turbo” => cl100k_base().context(“Failed to load cl100k”),

    	“text-davinci-003" => p50k_base().context(“Failed to load p50k"),

        _ => Err(anyhow::anyhow!(“Unsupported model requested”)))

    }

}
```

### 3. Encode and Count Tokens

Define a string variable with your input text.

Call the `encode_ordinary` method to transform the text into an array of integers

Retrieve the length of the vector to get the token count

```rust
let text = “Example”;
let encoder = get_encoder_for_model(“gpt-4”);
let tokens = encoder.encode_ordinary(text);

println!(“Token Count: {}”, tokens.len());
```

### 4. Optional: Verify with Decoding

To ensure your tokenization was _lossless_, you can reverse the process through decoding.

Call the decode method on your token array

Compare the resulting string with your original

```rust
let decoded_message = bpe.decode(tokens).expect(“Decoding failed);
assert_eq!(text, decoded_message);
```

> Warning: Do not re-initialize the encoder in a loop. Loading BPE vocabularies is a resource intensive. Instantiate the vocabulary once and pass the reference to your methods.

## CLI Operations

> Goal: Understand the CLI tool to analyze text files and estimate costs.

### 1. Install the CLI Tool

Run the following command to compile and install the tool globally on your system:

```bash
cargo install tiktoken-rs --features bin
```

Verify the install using the version flag

```rust
tiktoken-rs --version
```

### 2. Analyze a Single Prompt

Use the `–t` (text) flag to count tokens for a specific sentence.

```rust
tiktoken-rs –t “how many tokens are in this sentence?”
```

Review the output in your terminal. The tool will display a numerical array representing the token IDs.

### 3. Batch Process a File

If you have a large data file, you can process it entirely.

Locate your `.txt` file path

Using the command `pwd` in the directory will give you a path

Execute the tool using the `–f` (file) and `–c` (count only) flags

```bash
tiktoken-rs –f ./data/path/to/file.txt -c
```

Record your integer output. This is your T_input for cost calculations.

### 4. Calculate Your Expected API Cost

Once you have determined your `T_input`, you can use the Total Cost Formula to estimate your API costs.

Locate your model’s Input and Output rates

Apply the formula:

```latex
Total Cost =
∑𝑛𝑖=1(𝑇𝑖𝑛𝑝𝑢𝑡1000⋅𝑅𝑎𝑡𝑒𝑖𝑛𝑝𝑢𝑡)
∑
i
=
1
n
T
i
n
p
u
t
1000
⋅
R
a
t
e
i
n
p
u
t

Where n is the number of files, T_input is the number of input tokens, and Rate_in is the cost per input token for a given model.
```

> Optional: If you are budgeting your API calls, you can compare them using multiple vocabularies. You can do this by reusing a file across vocabularies:

Prepare your .txt file and filepath.

Run your command with a –m (model) flag to change vocabularies.

```rust
// Example test between GPT-4 and legacy GPT-3 models
Tiktoken-rs –m cl100k_base yourFile.txt -c // GPT-4
Tiktoken-rs –m r50k_base –f yourFile.txt -c // GPT-3 models
```

Observe how the token counts differ between the two models.

## Troubleshooting and FAQ

**Q. My cargo build is hanging, what do I do?**
This usually occurs when downloading a large BPE file. Ensure you have at least 500MB of storage and a stable internet connection

**Q. Special Character Issues: Emojis, kanji, and other characters appear as ‘unknown’ integers.**
Ensure your files are [UTF-8](https://en.wikipedia.org/wiki/UTF-8) encoded. Tiktoken-rs does not support other formats such as ASCII
