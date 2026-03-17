# 📚 Tiktoken-rs Reference Documentation

?> This reference guide includes structured details for implementing and using the Tiktoken-rs tokenizer. It is divided among API references, CLI references, FAQs, and a glossary of key terms.

## Rust API Reference

?> This section is geared towards experienced developers that want to integrate tokenization into their Rust codebase. In this section, we will map core methods of the tiktoken-rs crate for model instantiation and string tokenization.

### Initialization Functions

These functions load the Byte Pair Encoding (BPE) key terms and features. They return a Result containing the CoreBPE struct, which is required for executing encodings and decoding tasks.

| Function       | Returns                        | Description                                                                                          |
| -------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `cli100k_base()` | `Result<CoreBPE, anyhow::Error>` | Loads the standard libraries used by GPT-4 and GPT-3.5-Turbo. The most common initialization method. |
| `p50k_base()`    | `Result<CoreBPE, anyhow::Error>` | Loads legacy vocabulary used by older models like Codex.                                             |
| `p50k_base()`    | `Result<CoreBPE,anyhow::Error>`  | Loads vocabulary used by the original GPT-3 models                                                   |

### CoreBPE Functions

Once you initialize a CoreBPE instance, you can use the following to translate data:

| Method                     | Parameters        | Returns                       |
| -------------------------- | ----------------- | ----------------------------- |
| `encode_ordinary()`          | `text:&str`         | `Vec<usize>`                    |
| `encode_with_special_tokens()` | `text:&str`         | `Vec<usize>`                    |
| `decode()`                   | `tokens:Vec<usize>` | `Result<String, anyhow::Error>` |

### Code Block: API Integration

```rust
use tiktoken_rs::cl100k_base;

fn main() {
// 1. Initialize the BPE Model
let bpe = cl100k_base().unwrap();

// 2. Encode a standard string
let tokens = bpe.encode_ordinary("Hello, World!");

// Output: [9906, 11, 1917, 0]
println!("Token array: {:?}", tokens);

}
```

## CLI Command Reference

?> Prompt engineers and other roles with weak Rust experience will utilize the pre-compiled binary for analyzing strings and cost estimates.

The Tiktoken-rs binary allows you to analyze text files and inline strings from your terminal.

### Global Flags:

These flags control how the CLI reads input and structures its output.

| Flag         | Shorthand | Argument Type   | Description                                                                                                                                          |
| ------------ | --------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--model`     | `-m `       | String          | Specifies the encoding model to use the given model. Defaults to `cl100k_base`.                                                                        |
| `--text`       | `-t`        | String          | Passes an inline string into the tokenizer. Ideal for brief tests.                                                                                   |
| `--file`       | `-f`        | Filepath (PATH) | Specifies the path to a local .txt file. The CLI will read and tokenize the file.                                                                    |
| `--count-only` | `-c`        | None            | Modifies the output. Rather than printing an array of token IDs, it outputs the total token count as an integer. Recommended for batch calculations. |

!> Warning: Using the CLI on files larger than 500MB may lead to high memory consumption. For very large datasets, consider splitting files before processing.

### CLI Usage Example:

?> **NOTE:** To calculate the input cost of a large dataset, use the `--file` and `--count-only` flags together to get the exact variable `(T_input)` for pricing calculations.

Bash Command:
```bash
Tiktoken-rs –m cl100k_base –f ./dataset.txt -c
```

Output:
```bash
Total tokens: 45,912
```

## Frequently Asked Questions (FAQ) and Troubleshooting

?> This section addresses common integration and execution errors.

**Q. Why does my token count differ from the official OpenAI web tokenizer?**

This usually arises from a model initialization mismatch. Ensure you are initializing the correct BPE model for your LLM.  
 e.g. Using the legacy `p50k_base` model for text intended for the GPT-4 model will output a significantly different token count than the `cl100k_base` model, the correct vocabulary in this case.

**Q. How do I handle “Out of Memory” (OOM) errors in the CLI?**

If you pass a large `.txt` file (GB of data) using the `–f` flag, the CLI will load the entire file into memory before encoding. To resolve this, split your file or dataset into smaller chunks and run the CLI across them using a bash script.

**Q. Why is Rust failing when importing the crate?**
Tiktoken-rs uses advanced Rust features for performance optimization. If your build fails during cargo compilation, ensure your Rust toolchain is up to date.
Run rustup update in your terminal to fetch the latest stable compiler.

## Glossary

?> Familiarize yourself with these terms and concepts to accurately use the tokenizer and analyze your API costs.

**Byte Pair Encoding (BPE):** The data compression algorithm used by LLMs. It iteratively merges the most frequently occurring pairs of characters or bytes into a single token.

**Context Window:** The maximum limit of tokens an LLM can process in a single query. This includes both the input prompt and generated output.

**Rate Calculation:** The formula for estimating costs based on number of tokens (T).

![Rate Calculation Formula](https://math.now.sh?from=Cost%3D%5Cleft(%5Cfrac%7BT_%7Binput%7D%7D%7B1000%7D%5Ccdot%20Rate_%7Bin%7D%5Cright)%2B%5Cleft(%5Cfrac%7BT_%7Boutput%7D%7D%7B1000%7D%5Ccdot%20Rate_%7Bout%7D%5Cright))

**Special Token:** Reserved syntax used to give structural instructions to the LLM, such as indicating the end of a document. E.g. `<|endoftext|>`

**Token:** The smallest unit of data processed by an LLM. A token can range from a single character to a syllable or a word depending on the BPE vocabulary.

**Vocabulary (Model):** The dictionary of tokens mapped to integer IDs. Different LLM models use different models.
