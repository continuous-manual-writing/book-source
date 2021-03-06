# ドキュメント作成システム構築ガイド ソースファイル

このリポジトリは書籍「[ドキュメント作成システム構築ガイド](http://gihyo.jp/book/2016/978-4-7741-8036-6)」のソースファイル（一部）を保持します。

# ファイル構成

* **Makefile** PDF ドキュメントの生成や RedPenに よる検査を実行します。
* **js** JavaScript で書かれた RedPen の機能拡張が保存されています。
* **main.adoc** 書籍のソースファイル（まえがき、あとがき等）です。
* **chapter1.adoc** 書籍の第1章（の一部）です。
* **redpen-conf.xml** RedPen の自動検査で使用した設定ファイルです。
* **redepn_resources** RedPen の検査で使用した辞書ファイルを保持します。
* **res** Asciidoctor のスタイルに関するファイルを保持します。

# 実行方法

## PDFドキュメントの生成

PDFフォーマットで書籍を生成するには以下のコマンドを実行します。

```
$make pdf
```

## ドキュメントの検査

RedPen でドキュメントの検査を行うには以下のコマンドを実行します。

```
$make check
```
