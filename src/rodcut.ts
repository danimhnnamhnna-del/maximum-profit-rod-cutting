function getMaxProfit(prices: any[], n: number): number {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let res = 0;
    for (let j = 0; j < i; j++) {
      res = Math.max(res, prices[j] + dp[i - (j + 1)]);
    }
    dp[i] = res;
  }
  return dp[n];
}

