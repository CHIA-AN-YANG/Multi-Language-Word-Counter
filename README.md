# Multi-Language-Word-Counter
Files to compose an online word counter that can count Mandarin, Japanese, English, as well as Indonesian letters...etc.

This work is originally in Mandarin. English version may be added in the future.

## Developer's note: 開發筆記

### 緣起與動機
由於工作是多國語言網站的維護，需要發稿給八種語言的譯者，並要在算字數時去除網址、標點符號等，所以非常需要可以設定不同語種的字數計算。但目前算字數的網頁大多沒辦法做到，所以就想自己動手做一個。

### 開發過程
一開始是先想要功能列出來，然後一樣一樣放進HTML。途中經由自己反覆測試去確認按鈕的位置及功能必須好理解且方便使用。有的功能可能對某些使用者很重要，其他使用者卻不常用，就設計成可以展開-收合的形式(像是修正後的文字輸出面板)。

UI一開始以活潑的橙色跟黃綠色做主題，後來為了提升頁面的專業感，改成藍紫色系並統一色調。再將不同的按鈕依使用頻率、功能，與族群來分組。邊做邊重讀Material Design，對需要考慮的面向很有感！

JS(javascript)的部分曾困擾於要使用文字還是陣列做運算。中英文因為字數計算的不同，中文可以輕易用陣列計算，英文則採用regex正規表達式。形成了中英有兩組不同按鈕，分別對應到方塊字與拼寫文字的兩種計算方式。

### 結語
字數計算器的構想其實從11月開始上js實體課就開始了。但那時候的技術能力還不足以處理文字的計算。特別感謝當時Kuro老師提供解決思路。最後是在完課大約半個月後，以3天的跨年假期衝出來。

## To Do list 想到要改善的功能:

### 待更新的功能或Bug

### 標籤可以用"Enter"做輸入 (已完成)
需要做'keydown'用法熟悉

### 禁止放入重複的標籤(衡量中)

### 依據語言別調整字數計算方式 (已完成)
先從英語開始，加入以空白斷字的字數計算方式

### 做統一的UI色彩規劃與設計 (已完成)
按鈕顏色太亮，亮色可以用在其他需要強調的部分

### 更完善作品集的要素 (已完成)
1. 動機與緣起
2. 開發筆記
3. 版權聲明、在footer放上個人資料與網站連結
