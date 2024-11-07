import { getMenus } from "../services/apiRestaurant";

export async function getFromMenus() {
    const menus = await getMenus();
    return menus;
  }