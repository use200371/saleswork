# 2020年11月

## Identity Aware Proxy

Identity Aware Proxy(以降、IAP)を使用するとユーザーを簡単に制御する事が可能となる

例えば、GAEにてアプリをデプロイすると基本的に誰でもアクセス可能な状態となる

アプリ内でユーザー制限を行っていたとしても少なくともログイン画面は表示できる状態である

インターネットとアプリの境界間にIAPの承認レイヤを入れる事で許可されたユーザー以外はアクセスを不可とする事ができるようになる

### 設定方法

GCPコンソールより「IAMと管理」-「Identity-Aware Proxy」より設定を行う

### メンバー追加可能なアカウント

|アカウント種類|
|:-|
|Google アカウント|
|Google グループ|
|サービスアカウント|
|G Suiteのドメイン|

### 確認が必要な事

chromeにログインしていれば毎回ログインを行う必要がないはず

### デメリット

ユーザを手動で追加する必要があり、管理が煩雑である(普通のシステムでもユーザーメンテは必要なので同じ？)

外部IDを使用するとGoogleアカウント以外(メール/パスワード、Facebook、Twitter等)で承認させる事が可能となる。(ただし、Firebaseによる実装が必要となる)

##### 参考

[Identity-Aware Proxy の概要](https://cloud.google.com/iap/docs/concepts-overview?hl=ja)

[外部 ID の有効化](https://cloud.google.com/iap/docs/enable-external-identities?hl=ja)

[面倒なアプリのログイン機能を超簡単に実装する on GCP](https://medium.com/google-cloud-jp/%E9%9D%A2%E5%80%92%E3%81%AA%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E6%A9%9F%E8%83%BD%E3%82%92%E8%B6%85%E7%B0%A1%E5%8D%98%E3%81%AB%E5%AE%9F%E8%A3%85%E3%81%99%E3%82%8B-on-gcp-13db17d6dd2b)

[【GCP】BeyondCorpについて調べてみた](https://qiita.com/Mune_robo/items/5ac7ca29469b6fc454e2)

## Cloud Storage

### オブジェクトのライフサイクル管理

オブジェクトに対して有効期間(TTL)を設定する事が可能

例えば、作成されてから1年が経過した場合に削除する事を設定できる

Webサービスにおいて自前で削除バッチを用意する必要がない

## React

### 概要

Facebookによって開発されているSPAを実現するフロントエンド向けのJSフレームワーク

Vue.jsと比較して手軽ではなく、学習コストは高めである

パフォーマンスや堅牢さでは優っている(Vue.jsが次期バージョンでtypescriptに完全対応すると変わる可能性もある)

[完全に独断と偏見だけどReact vs Vue してみた](https://qiita.com/102Design/items/ae018dc80a4d879d92a8)

### next.js

Vue.jsのSSRのnuxt.jsと名前が似ているがこちらはReactのSSR

開発はvercel

[NEXT.js](https://nextjs-docs-ja.netlify.app/docs)

### React　プロジェクト作成

下記のコマンドによりプロジェクトが作成される。(3～4分ぐらい掛かる)

公式のテンプレートであるが、実際には不要なものが含まれている可能性がある。

```
npx create-react-app [プロジェクト名]
```

素から入れる場合

```
npm i react react-dom webpack webpack-cli
```

```
npm i -D typescript ts-loader webpack-dev-server @types/{react,react-dom}
```