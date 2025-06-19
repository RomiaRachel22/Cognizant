import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(61, "Shoes", "Footwear"),
            new Product(92, "Laptop", "Electronics"),
            new Product(13, "Book", "Stationery"),
            new Product(54, "Phone", "Electronics")
        };

        // Linear Search
        Product result1 = Search.linearSearch(products, "Phone");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));


        Arrays.sort(products, (p1, p2) -> p1.productName.compareToIgnoreCase(p2.productName));

        // Binary Search
        Product result2 = Search.binarySearch(products, "Book");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
