package fitapp;

public class BMI {
	public String calculateBMI(double weight, double height) {
        if (height <= 0 || weight <= 0) {
            return "Invalid input: weight and height must be positive numbers.";
        }
        double bmi = weight / (height * height);
        return String.format("Your BMI is: %.2f", bmi);
    }
}
