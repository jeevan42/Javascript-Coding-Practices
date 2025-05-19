import { connectDB } from "../db/config.js";
import { fetchTotalOrderPlacedByEachUser, calculateTotalOrderAmountForEachOrder, findTopFiveUsersWhoSpentMostMoneyOnOrders } from "./tasks/ZippyMart.js";
connectDB();
// fetchTotalOrderPlacedByEachUser();
// calculateTotalOrderAmountForEachOrder();
// findTopFiveUsersWhoSpentMostMoneyOnOrders();
