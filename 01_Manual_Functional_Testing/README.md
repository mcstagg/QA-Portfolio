# 01 Manual Functional Testing

## User Login Functionality Module

### Test case document: 
https://docs.google.com/spreadsheets/d/1j36U6I9tZ9cvNaaWY6KU14cqM7nlknEDlMSAg855B80/edit?usp=sharing

### Test Scenario Outline:

Objective:
Verify that the login functionality works correctly under normal and edge-case conditions.

- Feature Under Test: User Login Functionality
- Module: Login Page
- Application Type: Web-based

### Notes on browser/environment setup:

Tested on MacOS Ventura 13.5.2 with Chrome Browser Version 135.0.7049.115 (Official Build) (x86_64)

### Testing and UI Behavior Screenshots:

Test Case Spreadsheet:

<img src="./Test-ScreenShots/Spreadsheet.png" alt="Spreadsheet" width="700"/>

#### <u>TC-001</u>:
Test Result: Pass

<img src="./Test-ScreenShots/TestScript1.png" alt="TestScript1" width="700"/>

Step 1: Navigate to Login Page:

<img src="./UI-ScreenShots/LoginScreen.png" alt="Login Page" width="300"/>

<img src="./Test-ScreenShots/TC-001-Step-1.png" alt="TC-001 Step 1" width="600"/>

Step 2: Enter a valid username:

<img src="./UI-ScreenShots/ValidUsername.png" alt="Valid Username" width="300"/>

<img src="./Test-ScreenShots/TC-001-Step-2.png" alt="TC-001 Step 2" width="700"/>

Step 3: Enter a valid password:

<img src="./UI-ScreenShots/ValidLogin.png" alt="Valid Login" width="300"/>

<img src="./Test-ScreenShots/TC-001-Step-3.png" alt="TC-001 Step 3" width="700"/>

Step 4: Click the login button:

<img src="./UI-ScreenShots/SuccessfulLogin.png" alt="Successful Login" width="300"/>

<img src="./Test-ScreenShots/TC-001-Step-4.png" alt="TC-001 Step 4" width="700"/>

Step 5: Verify the welcome message

<img src="./UI-ScreenShots/SuccessfulLogin.png" alt="Successful Login" width="300"/>

<img src="./Test-ScreenShots/TC-001-Step-5.png" alt="TC-001 Step 5" width="700"/>

#### <u>TC-002</u>:
Test Result: Pass

<img src="./Test-ScreenShots/TestScript2.png" alt="TestScript2" width="700"/>

Step 1: Navigate to Login Page:

<img src="./UI-ScreenShots/LoginScreen.png" alt="Login Page" width="300"/>

<img src="./Test-ScreenShots/TC-001-Step-1.png" alt="TC-002 Step 1" width="700"/>

Step 2: Enter Invalid Username

<img src="./UI-ScreenShots/InvalidUsername.png" alt="Invalid Username" width="300"/>

<img src="./Test-ScreenShots/TC-002-Step-2.png" alt="TC-002 Step 2" width="700"/>

Step 3: Enter Invalid Password

<img src="./UI-ScreenShots/InvalidLogin.png" alt="Invalid Login" width="300"/>

<img src="./Test-ScreenShots/TC-002-Step-3.png" alt="TC-002 Step 3" width="700"/>

Step 4: Click the Login button

<img src="./UI-ScreenShots/UnsuccessfulLogin.png" alt="Unsuccessful Login" width="300"/>

<img src="./Test-ScreenShots/TC-002-Step-4.png" alt="TC-002 Step 4" width="700"/>