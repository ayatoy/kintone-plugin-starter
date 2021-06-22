# kintone plugin starter by modern JavaScript

kintoneのプラグインをモダンなJavaScriptで開発するための雛形プロジェクトです。

# Getting started

- このリポジトリをクローン
```
git clone https://github.com/ayatoy/kintone-plugin-starter.git <プロジェクト名>
```
- 依存関係をインストール
```
cd <プロジェクト名>
npm install
```
- 秘密鍵を用意
```
cp /path/to/your/private.ppk private.ppk
```
秘密鍵はプロジェクトのルートに ```private.ppk``` という名前で保存します。もし秘密鍵が無ければ自動で新しい秘密鍵が生成されます。
- 必要な環境変数を設定
```
export KINTONE_BASE_URL=https://<サブドメイン>.cybozu.com
export KINTONE_USERNAME=<ログイン名>
export KINTONE_PASSWORD=<パスワード>
```
- 開発用にソースコードを監視してライブアップロードする場合
```
npm run develop
```
- 本番用にビルドとアップロードする場合
```
npm run build
```
- ビルドした結果を掃除したい場合
```
npm run clean
```
- ソースコードのフォーマットと構文チェック
```
npm run fix
```

# License
[MIT](LICENSE)
