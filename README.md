### TODO

- データ分割機能
- 性能改善、インプットが正常に機能しない問題を解決する
- セル機能を導入せべし、矢印でセルを移動、Enterでセルの編集を行う
- ポップアップ機能でユーザに通知を行うこと => react-pnotify導入予定
- Inputの幅がおかしいので修正すること => padding修正
- Inputの挙動がおかしいので、なんとかしたい
- DeleteDimensionComponentを作成すること
- セーブ機能出来ればほしい
- タイトルコピーボタン欲しい
- データの削除機能ほしい
- スクロールバー改善したい => cssを指定
- データを読み込むときに空の改行を読みとばす処理を入れたい
- eslint、jest導入したい => eslintめんどくさい、jestは入れる
- なぜか特徴が改行する => ロード時に改行を削除
- Exportしたあとになぜかほかのボタンが動かなくなる => ダイアログの位置を戻す
- 出力時に存在確認したい

### 暫定対処

- ファイルを分割する

```sh
$ split -d -l 100 --additional-suffix=.csv prod.csv prod-split
$ ls prod-split* | xargs sed -i '1s/^/title\n/'
```