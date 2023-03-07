import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./Filter/ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const addFilterHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear)
    }

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterExpense={addFilterHandler}/>

                {props.items.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
            </Card>
        </>
    );
}

export default Expenses;