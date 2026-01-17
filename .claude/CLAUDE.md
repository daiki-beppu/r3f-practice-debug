# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Three Fiber (R3F) アプリケーション。以下の技術スタックで構成:

- **React 19** - UI フレームワーク
- **React Three Fiber** - Three.js の React レンダラー (3D グラフィックス)
- **TypeScript** - 型安全性
- **Vite** - ビルドツール・開発サーバー
- **Tailwind CSS v4** - スタイリング
- **Bun** - パッケージマネージャー・ランタイム

## Development Commands

**このプロジェクトは `ni` (Node Installer) を使用してパッケージマネージャーを自動検出します。**

```bash
# 開発サーバー起動 (HMR 有効)
nr dev

# プロダクションビルド (型チェック + ビルド)
nr build

# ビルド結果のプレビュー
nr preview

# コードフォーマット・Lint 修正 (型チェック付き)
nr fix

# パッケージのインストール
ni

# 依存関係の追加
ni <package-name>

# 開発依存関係の追加
ni -D <package-name>
```

`ni` コマンドは `bun.lock` の存在を検出し、自動的に `bun` を使用します。

## Project Structure

```
src/
├── app.tsx        # メインアプリケーションコンポーネント
├── main.tsx       # エントリーポイント
├── global.css     # グローバルスタイル (Tailwind 含む)
└── assets/        # 静的アセット
```

- エントリーポイント: `src/main.tsx` → `index.html`
- React StrictMode 有効
- TypeScript strict mode 有効

## React Three Fiber (R3F) Guidelines

R3F を使用する際の注意点:

- `<Canvas>` コンポーネント内で Three.js オブジェクトを JSX として記述
- R3F の hooks (`useFrame`, `useThree`, `useLoader` など) は `<Canvas>` 内でのみ使用可能
- Three.js のクラス名は小文字・キャメルケースに変換 (例: `THREE.Mesh` → `<mesh>`)
- Props は Three.js オブジェクトのプロパティに直接マッピング
- `args` prop で constructor 引数を指定
