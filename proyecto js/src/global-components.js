import Close from "./components/Close.vue";
import Button from "./components/Button.vue";
import PaginationBtn from "./components/PaginationBtn.vue";
import PaginationNav from "./components/PaginationNav.vue";
import ItemList from "./components/ItemList.vue";
import CardData from "./components/CardData.vue";
import IconMusic from "./components/icons/IconMusic.vue";
import IconStar from "./components/icons/IconStar.vue";
import IconOpcion from "./components/icons/IconOpcion.vue";
import IconHeart from "./components/icons/IconHeart.vue";
import IconAleatory from "./components/icons/IconAleatory.vue";
import IconLeft from "./components/icons/IconLeft.vue";
import IconPause from "./components/icons/IconPause.vue";
import IconRight from "./components/icons/IconRight.vue";
import IconRepeat from "./components/icons/IconRepeat.vue";
import IconBelow from "./components/icons/IconBelow.vue";
import IconStart from "./components/icons/IconStart.vue";

export default {
  install(app) {
    app.component("Close", Close);
    app.component("Button", Button);
    app.component("PaginationBtn", PaginationBtn);
    app.component("PaginationNav", PaginationNav);
    app.component("ItemList", ItemList);
    app.component("CardData", CardData);
    app.component("IconMusic", IconMusic);
    app.component("IconStar", IconStar);
    app.component("IconOpcion", IconOpcion);
    app.component("IconHeart", IconHeart);
    app.component("IconAleatory", IconAleatory);
    app.component("IconLeft", IconLeft);
    app.component("IconPause", IconPause);
    app.component("IconRight", IconRight);
    app.component("IconRepeat", IconRepeat);
    app.component("IconBelow", IconBelow);
    app.component("IconStart", IconStart);
  },
};
