
			document.addEventListener("DOMContentLoaded", function() {
			var popupChatBox = document.querySelector(".wa__popup_chat_box");
			var btnPopup = document.querySelector(".wa__btn_popup");

			btnPopup.addEventListener("click", function() {
			var isActive = popupChatBox.classList.contains("wa__active");
			var isLauched = popupChatBox.classList.contains("wa__lauch");

			popupChatBox.classList.toggle("wa__pending", !isActive);
			popupChatBox.classList.toggle("wa__active", !isActive);
			btnPopup.classList.toggle("wa__active", !isActive);

					if (isLauched) {
					popupChatBox.classList.remove("wa__pending", "wa__lauch");
					} else {
					popupChatBox.classList.add("wa__lauch");
					}
				});
				});
