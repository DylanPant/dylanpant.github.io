# Tiktoken-RS Conceptual Overview

Tiktoken-rs (Tiktoken) is a Rust library used to calculate how the OpenAI Large Language Models (LLM) interpret and process queries. While humans see sentences with words, punctuation, and other characters, LLMs interpret them as long chains of identifiers called tokens.

This document will highlight the process of tokenization, the structure of the Tiktoken library, and the importance of tracking query volumes.

## Intended Audiences and Scope

Backend Developers: This doc will cover, at a high level, the process of integrating Tiktoken through crates, the API structure, and necessary environment features.

Prompt Engineers and Less Technical Audiences: This doc includes high-level explanations of tokenization and using the CLI to evaluate files and text without writing code.

## What is a Token?

A token is the foundational unit of information for an LLM. Unlike human languages that get meaning through character sequences and counts, LLMs interpret strings (queries) as chunks of information based on frequency and importance.

> E.g. Humans might break down the sentence “The five boxing wizards jumped quickly.” as the words: The, five, boxing, wizards, etc; but depending on how an LLM is trained, it may interpret the parts as: The, ick, wizards, ar, etc.
> They do not process words or characters like we do and vary based on how they are trained.

Tiktoken uses Byte Pair Encoding (BPE) to merge the most frequently occurring bytes in a dataset into tokens. Put simply, common words (e.g. ‘the’, “is”, “are”) might represent their own token, while less common ones are broken into segments (e.g. “tokenization” into “to”, “keniz”, “ation”). Punctuation and other, invisible characters can be appended or prepended onto other tokens. Based on the frequency of these tokens, LLMs can attempt to generate information and text using probability and statistics.

## The Tiktoken Library

This library is divided into three steps that work together to translate human-readable text into something ChatGPT (or any model using the OpenAI BPE) can interpret.

### 1. BPE Vocabularies: The Data Layer

The word bank of each LLM model. Even within OpenAI’s model versions, they are trained on different sets of tokens (frequency and type of information). Tiktoken provides premade dictionaries such as cl100k_base as data files that are loaded at runtime.

### 2. CoreBPE Struct: The API Layer

This is the main interface for developers. The CoreBPE layer acts as the main machine, being able to encode (queries to tokens) or decode (tokens to raw text) using the encoding logic.

### 3. CLI and Crate: The Interface Layer

Tiktoken can be used in two ways: As a Rust crate or as a CLI tool.

1. Rust Crates allow developers to integrade Tiktoken into their Rust .rs programs.

2. The CLI tool, which is a pre-compiled binary, allows non-developers to count tokens via the terminal.

## Capabilities and Limitations

Before using Tiktoken, it’s important to understand what its scope of abilities are.

Capabilities:

- Locally tokenize your text into integer arrays (encoding) or back into text (decoding).
- Precisely calculate your API overhead by using the exact token system your OpenAI LLM will interpret with

Limitations:

- This software is NOT its own LLM. It cannot process queries after encoding them.
- Use is currently limited to OpenAI models (GPT-3, GPT-4, etc.) and may not use the same BPE as other models like Claude or Gemini.
- You cannot use this to train your own LLM. It is designed to be an interface for developers and cannot function as a transformer for an LLM.

## Using Tiktoken in Development

To use Tiktoken, there are some important things to consider:

- Rust Toolchain: You must have cargo and rustc (version 1.6+) installed on your machine to properly compile the imported libraries and CLI

- Terminal/Shell: Basic knowledge of using a command-line interface (e.g. MacOS Terminal, Windows Powershell, etc.) is required to use both versions of Tiktoken.

## Why Counting Tokens Matters

In a development setting, understanding the relationship between tokens and the context window is essential. Like all humans, there comes a point where you forget things if you are given too much information; and once you forget something, you cannot remember it later.

Tiktoken serves as your memory tracker, providing a safety layer for your inputs before sending them to an LLM. This not only improves the quality of your queries, but also saves you money on wasted tokens. For reference, OpenAI calculates its pricing using the formula:

    Cost = T_in/1000 * Rate_in + T_out/1000 * Rate_out, where T is the number of 	tokens
