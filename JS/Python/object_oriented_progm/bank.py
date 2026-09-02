class BankAccount:
    def __init__(self, owner, balance, account_no):
        self.owner = owner
        self.balance = balance
        self.account_no = account_no

    def get_balance(self):
        pass

    def deposit(self):
        pass

    def withdrawal(self):
        pass

    def show_account_details(self):
        print(f"Owner {self.owner}")
        print(f"Balance {self.balance}")
        print(f"Account no {self.account_no}")

jerry = BankAccount(owner = "Jerry",balance = 200, account_no = '1298965470')
jerry.show_account_details()                