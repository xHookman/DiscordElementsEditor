/**
 * @name ElementsEditor
 * @author Jck0day
 * @description Allow you to edit elements just by clicking on a button !
 * @version 0.0.1
 */
let btnDesignMode=null;
let topBar=null;
module.exports = class ElementsEditor {
    start() {
      // Called when the plugin is activated (including after reloads)
	btnDesignMode = document.createElement("button");
	btnDesignMode.textContent = "Edit";
	btnDesignMode.addEventListener("click", () => {
		if(document.designMode == 'on'){
			document.designMode = 'off'
		} else {
			document.designMode = 'on'
		}
		BdApi.showToast("Editing mode : " + document.designMode);
	});
	topBar = document.querySelector(".toolbar-3_r2xA");
	topBar.append(btnDesignMode);

	// This part re-adds it when removed
	BdApi.onRemoved(btnDesignMode, () => {
    		topBar.append(btnDesignMode);
	});

	BdApi.injectCSS("ElementsEditor", `.btnDesignMode {
    padding: 4px;
    border-radius: 5px;
    background: black;
    color: black;
}`);
    }
    stop() {
      // Called when the plugin is deactivated
	btnDesignMode.remove();
    }
}