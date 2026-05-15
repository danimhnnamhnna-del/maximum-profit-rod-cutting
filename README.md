# maximum-profit-rod-cutting
A TypeScript implementation to find the maximum profit obtainable by cutting a rod into pieces using Dynamic Programming.
# Rod Cutting Problem

A professional and efficient TypeScript implementation to solve the **Rod Cutting Problem** using Dynamic Programming.

## Description
Given a rod of length `n` and an array of prices for each piece size, this program calculates the maximum revenue obtainable by cutting the rod and selling the pieces.

## Logic & Strategy
- **Approach:** Dynamic Programming (Bottom-Up).
- **Time Complexity:** O(n²) - Optimized to avoid redundant calculations.
- **Space Complexity:** O(n) - Uses a memoization array (`dp`) to store intermediate results.

## Example
For a rod length of 4 and prices `[1, 5, 8, 9]`:
- **Possible cuts:** (2+2), (1+3), (4), etc.
- **Result:** 10 (from two pieces of length 2).

## How to Run
1. Install dependencies:
   npm install
2. Run the project:
   npm run dani
