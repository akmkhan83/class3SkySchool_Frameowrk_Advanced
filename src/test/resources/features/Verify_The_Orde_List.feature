Feature: Verify The Customer Order List
@Sanity @Regression
Scenario: Verify The Order List
Given I am in landing page http://it.microtechlimited.com
Then I Clicked on Login Button
Then I Clicked on Customer Login Button
And I Entered User Id as divid@gmail.com
And I Entered Password as 1234
Then I Clicked on Loging Button
Then I Clicked on Order List
And I verify the Order List Text
Then I Logged out from The Page 