import java.util.Scanner;

public class SimpleCalculator {

    public static void main(String[] args) {
        // Create scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // Display the menu
        System.out.println("Select operation:");
        System.out.println("1. Add");
        System.out.println("2. Subtract");
        System.out.println("3. Multiply");
        System.out.println("4. Divide");

        // Get user input for operation choice
        System.out.print("Enter choice (1/2/3/4): ");
        int choice = scanner.nextInt();

        // Get user input for numbers
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();

        // Perform the selected operation
        switch (choice) {
            case 1:
         
