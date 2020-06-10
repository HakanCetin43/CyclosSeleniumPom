package Steps;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import static Pages.LogInPage.*;
import static Pages.TransferDetailsPage.confirmPaymentSuccessfull;
import static Pages.WelcomePage.*;
import static Pages.PayUserPage.*;
import static Pages.ReviewPaymentPage.*;

public class MyStepdefs {

    WebDriver driver;
    WebDriverWait wait;


    @Before
    public void driverSetUp() {
        System.setProperty("webdriver.chrome.driver", "drivers/chromedriver");
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, 10);
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Given("the user navigates to {string}")
    public void theUserNavigatesTo(String url) {
        navigate(driver, url);
    }


    @When("the user enters username {string}")
    public void theUserEntersUsername(String username) {
        enterUsername(wait, username);
    }


    @And("the user enters password {string}")
    public void theUserEntersPassword(String password) {
        enterPassword(wait, password);
    }


    @And("the user clicks sign in button")
    public void theUserClicksSignInButton() {
        clickSignIn(driver);
    }

    @Then("the user views {string}")
    public void theUserViews(String expectedMessage) {
        checkIfTextVisible(wait, expectedMessage);

    }


    @Then("the user views errorMessage {string}")
    public void theUserViewsErrorMessage(String expectedErrorMessage) {
        viewsErrorMessage(wait, expectedErrorMessage);
    }

    @And("the user selects {string} from contact")
    public void theUserSelectsFromContact(String arg0) throws InterruptedException {
        selectPayee(wait);

    }

    @And("the user clicks pay user")
    public void theUserClicksPayUser() {
        goToPayUser(wait);
    }

    @And("the user clicks Contact")
    public void theUserClicksContact() {
        clickContact(wait);
    }

    @And("the user enters {string} to amount area")
    public void theUserEntersToAmountArea(String amount) {
        enterAmountToPay(wait, amount);
    }

    @And("the user types {string} to description")
    public void theUserTypesToDescription(String description) {
       // typeDescription(wait, description);
    }

    @And("the user clicks submit")
    public void theUserClicksSubmit() {
        clickSubmit(wait);
    }

    @And("the user clicks confirm")
    public void theUserClicksConfirm() {
        confirmPayment(wait);
    }

    @Then("the user views {string} on transfer page")
    public void theUserViewsOnTransferPage(String expectedMessage) {
        confirmPaymentSuccessfull(wait, expectedMessage);
    }
}
