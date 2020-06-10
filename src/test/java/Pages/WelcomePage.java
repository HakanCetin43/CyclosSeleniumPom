package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertEquals;

public class WelcomePage {
    static WebElement element = null;

    public static void checkIfTextVisible(WebDriverWait wait, String expectedMessage) {
        element = wait.until(ExpectedConditions.
                visibilityOfElementLocated(By.xpath("//div[text()='Welcome to the Cyclos4 Demo']")));

        String actualMessage = element.getText();
        assertEquals(expectedMessage, actualMessage);

    }

    public static void goToPayUser(WebDriverWait wait){
        element= wait.until(ExpectedConditions.
                visibilityOfElementLocated(By.xpath("//div[text()='Pay user']")));
        element.click();
    }
}
