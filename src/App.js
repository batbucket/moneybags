import React, { useState } from 'react'
import { Typography, Progress } from 'antd'
import './App.css'
import styles from './App.module.css'
import InputField from './components/InputField/InputField'
import MoneyTable from './components/MoneyTable/MoneyTable'

const { Title } = Typography

function App() {
    const [start, setStart] = useState(0)
    const [savings, setSavings] = useState(6000)
    const [income, setIncome] = useState(45000)
    const [swr, setSwr] = useState(4)
    const [annualReturn, setAnnualReturn] = useState(7)
    const [years, setYears] = useState(40)

    const data = []

    if (parseInt(swr) > parseInt(annualReturn)) {
        setSwr(parseInt(annualReturn))
    }

    const annualReturnPercent = annualReturn * 0.01
    const swrPercent = swr * 0.01

    let isRetired = false
    let modYears = 0

    const targetNetWorth = income / swrPercent
    let netWorth = start
    let prevNetWorth = 0
    for (let i = 0; i < 100 && !isRetired; i++) {
        prevNetWorth = netWorth

        console.log(netWorth, annualReturnPercent, savings)
        netWorth += netWorth * annualReturnPercent + savings

        const safeWithdrawalAmount = netWorth * swrPercent
        const interest = prevNetWorth * annualReturnPercent
        const difference = convertToMoney(netWorth - prevNetWorth, true)
        const progress = (
            <Progress
                percent={Math.floor((safeWithdrawalAmount / income) * 100)}
                width={30}
            />
        )

        if (netWorth >= targetNetWorth) {
            isRetired = true
            modYears = i
        }

        if (netWorth > 0) {
            data.push({
                key: i,
                year: i,
                swr: convertToMoney(safeWithdrawalAmount),
                savings: convertToMoney(savings, true),
                interest: convertToMoney(interest, true),
                progress,
                netWorth: convertToMoney(netWorth),
                difference,
            })
        }
    }

    if (years !== modYears) {
        setYears(modYears)
    }

    function convertToMoney(money, isColor) {
        const isPositive = money >= 0

        let sign = ''
        let style = ''

        if (isColor) {
            sign = isPositive ? '+' : '-'
            style = isPositive ? styles.green : styles.red
        }

        return (
            <span className={style}>
                {sign +
                    '$' +
                    Math.round(Math.abs(money))
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
        )
    }

    return (
        <>
            <div className={`${styles.centerContainer} ${styles.title}`}>
                <Title>Net Worth Milestone Generator</Title>
            </div>
            <div className={styles.centerContainer}>
                <InputField
                    prefix={'$'}
                    suffix='initial savings'
                    value={start}
                    onChange={setStart}
                />
            </div>
            <div className={styles.centerContainer}>
                <InputField
                    prefix={'$'}
                    suffix='yearly savings'
                    value={savings}
                    onChange={setSavings}
                />
            </div>
            <div className={styles.centerContainer}>
                <InputField
                    prefix={'$'}
                    suffix='yearly retirement expenses'
                    value={income}
                    onChange={setIncome}
                />
            </div>
            <div className={styles.centerContainer}>
                <InputField
                    suffix='% safe withdrawal'
                    value={swr}
                    onChange={setSwr}
                />
            </div>
            <div className={styles.centerContainer}>
                <InputField
                    suffix='% annual return'
                    value={annualReturn}
                    onChange={setAnnualReturn}
                />
            </div>
            <div className={styles.centerContainer}>
                <InputField
                    readOnly={true}
                    suffix='years to retirement'
                    value={years}
                    onChange={setYears}
                />
            </div>
            <div className={(styles.centerContainer, styles.table)}>
                <MoneyTable dataSource={data} />
            </div>
        </>
    )
}

export default App
