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
            // console.log(`--s-0->`, action.payload);
            const new_shop = action.payload;

            // console.log(`--s-1-`, new_shop?.title);
            if (!state.shoppingList.find((shop) => shop.id === new_shop?.id)) {
                // console.log(new_shop);

                state.shoppingList.push({ ...new_shop, count: 1 });
                // console.log(`1>>`, state.shoppingList.length);
            } else {
                const new_list = state.shoppingList.map((shop) => {
                    if (shop.id === new_shop.id) {
                        return { ...shop, count: shop.count + 1 };
                    } else {
                        return shop;
                    }
                });
                // console.log(new_list);
                state.shoppingList = new_list;
            }
            state.count++;
        },
        minusToshopping(state, action) {
            // console.log(`\n-->`, state, `\n-->`, action);
            const new_shop = action.payload;
            if (!state.shoppingList.find((shop) => shop.id === new_shop?.id)) {
                const new_list = state.shoppingList.map((shop) => {
                    console.log(`11->>`, shop.count);
                    if (shop.count > 1) {
                        if (shop.id === new_shop.id) {
                            return { ...shop, count: shop.count - 1 };
                        } else {
                            return shop;
                        }
                    } else {
                        removeFromShooping(shop.id);
                    }
                });
                state.shoppingList = new_list;
            }
            state.count--;
        },
        removeFromShooping(state, action) {
            // console.log(`${state}, ${action}`);
            const shop_id = action.payload;
            state.shoppingList = state.shoppingList.filter((shop) => {
                shop.id !== shop_id;
            });
            state.count--;
        },
        emptyShopping(state, action) {
            // console.log(`${state}, ${action}`);
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
