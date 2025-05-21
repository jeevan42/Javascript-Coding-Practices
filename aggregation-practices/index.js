import { connectDB } from "../db/config.js";
import { fetchTotalOrderPlacedByEachUser, calculateTotalOrderAmountForEachOrder, findTopFiveUsersWhoSpentMostMoneyOnOrders, findOutUsersNameAndTotalSpentOnDeliveredOrders } from "./tasks/ZippyMart.js";
connectDB();
// fetchTotalOrderPlacedByEachUser();
// calculateTotalOrderAmountForEachOrder();
// findTopFiveUsersWhoSpentMostMoneyOnOrders();
findOutUsersNameAndTotalSpentOnDeliveredOrders();
