# 打造餐廳清單

一個使用 Node.js + Express 打造的餐廳美食網站，此網站提供使用者瀏覽、搜尋餐廳功能，並可點擊各家餐廳以查看餐點類型、地址、地圖等詳細資訊。

### 功能列表

---

- 首頁顯示所有餐廳清單
- 點擊特定餐廳可進入查看詳細資訊，例如餐點類別、地址、電話、餐廳描述，並可點擊定位圖示連結至 Google 地圖
- 提供搜尋功能，使用者可輸入餐廳名稱關鍵字，以獲取符合內容的餐廳列表
- 在獲取搜尋結果後，可再次輸入關鍵字，縮小搜尋範圍，以查找最符合需求的餐廳

### 安裝

---

1. 開啟終端機 (Terminal)，clone 此專案至本機電腦
<p><code>git clone https://github.com/yunhsuanchin/Restaurant_List.git</code></p>

2. 進入專案資料夾
<p><code>cd Restaurant_List</p></code>

3. 安裝 npm 套件
<p><code>npm install</p></code>

4. 安裝 nodemon 套件，並啟動伺服器，執行程式
<p><code>npm run dev</p></code>

5. 當 terminal 出現以下字樣，表示伺服器已連結成功
<p><code>The server is listening on http://localhost:3000</p></code>

### 使用工具

---

- Visual Studio Code - 開發環境
- Express - 應用程式架構
- Express-Handlebars - 模板引擎
