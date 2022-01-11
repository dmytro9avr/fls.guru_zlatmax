// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target ;
   if (targetElement.closest('[data-parent]')) {
      const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null; 
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      if (subMenu) {
         targetElement.classList.toggle('_sub-menu-active');
         subMenu.classList.toggle('_sub-menu-open');

      } else {
         console.log("sub Menu empty")
      }
      e.preventDefault();
   }

};