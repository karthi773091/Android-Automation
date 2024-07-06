Feature: Login functionality

  Scenario Outline: Valid login attempts
    Given I launch the app
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on the login button
    Then I should see the welcome message or dashboard

    Examples:
      | username           | password  |
      | karthi@example.com    | 1234678  |

  Scenario Outline: Invalid login attempts
    Given I launch the app
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on the login button
    Then I should see an error toast message

    Examples:
      | username           | password  |
      | alice@example.com  | 10203040  |  # Locked user
      | 1@2.com            | f-o-o     |  # No match
      |                    |           |  # No user details
      | bob@example.com    |           |  # No password
