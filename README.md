**Dump readme contents here**

<!-- It should be concise, and include all the details necessary so people know what your repo is about --!>

<!-- Sample readme:
# OpenChess

OpenChess is a modern chess analysis and board interface built with **Tauri**, **React**, **TypeScript**, and **Rust**.

It provides a polished chessboard UI, opening lookup, evaluation display, move annotation support, and practice-focused workflows for analyzing games and training from positions.

## Features

- **Interactive chessboard** powered by Chessground
- **Move input and drag/drop play**
- **Evaluation bar** with centipawn and WDL display
- **Opening detection** from FEN and opening name search
- **Practice mode** with card-based performance tracking
- **Move annotations** and glyph-based visual hints
- **Board customization** with selectable board images and coordinate colors
- **Support for premoves, arrows, variations, and comments**
- **FIDE player info integration**
- **Tauri desktop app backend** for native performance and chess logic

## Tech Stack

- **Frontend:** React, TypeScript, Mantine, Jotai
- **Board UI:** `@lichess-org/chessground`
- **Chess logic:** `chessops`, custom PGN/chess helpers
- **Backend:** Rust, Tauri, `shakmaty`
- **Parsing / data:** PGN and TSV opening tables
- **Styling:** CSS Modules and board override styles

## Repository Structure

- `board_part.tsx` — main chessboard experience and interaction logic
- `OpenChessInterface.tsx` — Chessground wrapper and board state synchronization
- `EvalBar.tsx` — evaluation bar UI
- `opening.rs` — Rust opening lookup, fuzzy search, and Tauri commands
- `annotations.ts` — annotation definitions and glyph metadata
- `annotateHints.tsx` — visual annotation marker rendering
- `OpenChessBoard.module.css` — chessboard layout and state styling
- `InterfaceBaseOverride.css` — Chessground layout overrides
- `InerfaceColorOverride.css` — board image and coordinate color overrides
- `boardimages.tsx` — board image source reference
- `chess.js` — generated chess/PGN parser and engine helpers

## Getting Started

### Prerequisites

- **Node.js** and a package manager such as `pnpm`, `npm`, or `yarn`
- **Rust toolchain** with `cargo`
- **Tauri prerequisites** for your platform

### Installation

```bash
git clone https://github.com/Legimite-Lang/openchess.git
cd openchess
--!>
