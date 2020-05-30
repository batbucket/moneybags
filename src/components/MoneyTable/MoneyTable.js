import { Table } from 'antd'
import React, { useState } from 'react'
import styles from './MoneyTable.module.scss'

function MoneyTable(props) {
    return (
        <Table
            size={'small'}
            scroll={{ y: 400 }}
            className={styles.longTable}
            dataSource={props.dataSource}
            pagination={false}
            columns={[
                { title: 'Year', dataIndex: 'year' },
                { title: 'Savings Δ', dataIndex: 'savings' },
                { title: 'Interest Δ', dataIndex: 'interest' },
                {
                    title: 'Total Δ',
                    dataIndex: 'difference',
                },
                { title: 'Safe Withdrawal', dataIndex: 'swr' },
                {
                    title: 'Net Worth',
                    dataIndex: 'netWorth',
                },
                {
                    title: 'Progress %',
                    dataIndex: 'progress',
                },
            ]}
        />
    )
}

export default MoneyTable
