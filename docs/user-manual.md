# AI Expense Tracker User Manual

## 1. Getting Started

1. Register an account and verify your email with OTP.
2. Log in to open the main dashboard.
3. Visit `Profile` to add your name, phone number, address, and avatar.

## 2. Dashboard

The dashboard is the command center of the app.

- Review `Budget health`, `Top category`, and `AI sync` in the hero cards.
- Use the charts to understand monthly spending and category mix.
- Read `AI guidance` for budget pressure, alerts, recurring-spend signals, and suggested next actions.
- Use the chat panel to ask natural questions like:
  - `How much budget risk do I have right now?`
  - `Which subscriptions should I review first?`
  - `Summarize my latest receipt activity.`

## 3. Uploading Receipts

1. Open `Receipts`.
2. Choose a PDF or image receipt file.
3. Wait for the AI preview to detect vendor, amount, and category.
4. Adjust the category if needed.
5. Add optional notes.
6. Save the receipt.

Tip:
- Use the sample receipts included in the app if you want to test the flow quickly.

## 4. Budgets

1. Open `Budgets`.
2. Add category-specific monthly budgets.
3. Review the AI budget advisor and category watchlist.
4. Adjust the budgets that show the highest projected pressure.

The budget page helps you:
- forecast month-end spend
- estimate remaining headroom
- identify categories at risk

## 5. Categories And Vendor Rules

1. Open `Categories`.
2. Create reusable categories such as `Groceries`, `Travel`, `Dining`, or `Subscriptions`.
3. Add vendor rules like `Freshmart -> Groceries`.
4. Upload new receipts and confirm they auto-map to the expected category.

Vendor rules make the AI cleaner because they reduce repeated manual fixes.

## 6. AI Copilot

The expense copilot answers from your app data.

Use it for:
- budget risk
- recurring subscription review
- recent receipt summaries
- category pressure questions
- how-to-use-the-app questions

The copilot works best when you already have:
- multiple receipts uploaded
- at least one budget
- clear categories
- some vendor rules

## 7. Admin

If your account has the `Admin` role:

1. Open `Admin`.
2. Review total users and system activity.
3. Promote or demote users when needed.

## 8. Best Practice Workflow

1. Upload receipts regularly.
2. Keep categories clean.
3. Add vendor rules for repeat merchants.
4. Review budgets weekly.
5. Ask the copilot for summaries and alerts.

## 9. Sample Data Pack

The app includes multiple downloadable sample receipts for:
- groceries
- dining
- travel
- housing
- subscriptions

Upload them one by one to test:
- parsing
- category suggestions
- recurring spend detection
- chatbot answers

## 10. Troubleshooting

- If avatars do not show, restart the API and check the storage path.
- If AI chat falls back, verify the API key, endpoint, and provider quota.
- If categories or vendor rules error, confirm the database migrations are applied.
