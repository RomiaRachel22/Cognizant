public class FinancialForecast {

    public static double futureValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        } else {
            return (1 + rate) * futureValue(principal, rate, years - 1);
        }
    }

    public static void main(String[] args) {
        double initialValue = 10000;
        double growthRate = 0.10;
        int years = 4;

        double forecastedValue = futureValue(initialValue, growthRate, years);
        System.out.println("Forecasted Value after " + years + " years: " + forecastedValue);
    }
}
