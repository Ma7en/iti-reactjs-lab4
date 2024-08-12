/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
    name: "shopping",
    initialState: {
        shoppingList: [],
        count: 0,
    },
    reducers: {
        addToShopping(state, action) {
            const new_shop = action.payload;
            const existingShop = state.shoppingList.find(
                (shop) => shop.id === new_shop?.id
            );

            if (!existingShop) {
                state.shoppingList.push({ ...new_shop, count: 1 });
            } else {
                state.shoppingList = state.shoppingList.map((shop) =>
                    shop.id === new_shop.id
                        ? { ...shop, count: shop.count + 1 }
                        : shop
                );
            }
            state.count++;
        },
        minusToshopping(state, action) {
            const new_shop = action.payload;
            const existingShop = state.shoppingList.find(
                (shop) => shop.id === new_shop?.id
            );

            if (existingShop && existingShop.count > 1) {
                state.shoppingList = state.shoppingList.map((shop) =>
                    shop.id === new_shop.id
                        ? { ...shop, count: shop.count - 1 }
                        : shop
                );
                state.count--;
            } else if (existingShop && existingShop.count === 1) {
                state.shoppingList = state.shoppingList.filter(
                    (shop) => shop.id !== new_shop.id
                );
                state.count--;
            }
        },
        removeFromShooping(state, action) {
            const shop_id = action.payload;
            const shop = state.shoppingList.find((shop) => shop.id === shop_id);
            state.count -= shop ? shop.count : 0;
            state.shoppingList = state.shoppingList.filter(
                (shop) => shop.id !== shop_id
            );
        },
        emptyShopping(state, action) {
            state.shoppingList = [];
            state.count = 0;
        },
    },
});

export const {
    addToShopping,
    minusToshopping,
    removeFromShooping,
    emptyShopping,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
