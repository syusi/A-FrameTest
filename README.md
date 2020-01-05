# A-FrameTest
A-Frameのテスト

# github webの公開の仕方(後でまとめます)
https://qiita.com/tonkotsuboy_com/items/f98667b89228b98bc096

# 公開ページ
https://syusi.github.io/A-FrameTest/


# つまりどころ
- ローカルだけで開発は無理っぽい？
    - A-Frame:error This HTML file is currently being served via the file:// protocol. Assets, textures, and models WILL NOT WORK due to cross-origin policy! Please use a local or hosted server: https://aframe.io/docs/0.5.0/introduction/getting-started.html#using-a-local-server. 
    - node.jsでサーバー立てて回避
- 画面にボックスが表示されない。
    - 公式を見ていた：https://developer.mozilla.org/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
    - 現在、箱を出すタグはa-cubeではなくてa-boxであることが判明。修正で動いた。やっぱり公式はクソ。