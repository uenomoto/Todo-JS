import "./styles.css";

const onClickAdd = () => {
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";
  createIncompleteList(inputText);
};

const deleteFromINcompleteList = (target) => {
  document.querySelector("#incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");
  li.className = "list-row";

  // pタグせいせい
  const p = document.createElement("p");
  p.innerText = text;
  console.log(p);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromINcompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ（戻るボタン）
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.querySelector("#complete-list").removeChild(deleteTarget);

      // pテキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素に各要素設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.querySelector("#complete-list").appendChild(addTarget);
  });

  const deletedButton = document.createElement("button");
  deletedButton.innerText = "削除";
  deletedButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromINcompleteList(deletedButton.parentNode);
  });

  // liに対しての子要素にしてる
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deletedButton);

  document.querySelector("#incomplete-list").appendChild(li);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());
