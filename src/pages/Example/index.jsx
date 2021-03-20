import React, { useMemo } from 'react'
import style from './style.module.scss'
import {
	ExampleProvider,
	injectExample,
} from '@/pages/Example/useExampleService'
import Control from '@/pages/Example/Control'
import List from '@/pages/Example/List'

const Content = () => {
	const { loading } = injectExample()
	return useMemo(
		() => (
			<div className={style.root}>
				{loading && <div className="loading" />}
				<Control />
				<List />
			</div>
		),
		[loading],
	)
}

const Example = props => {
	$devLog(
		'%c------------------------\n 以下為 Example 打印資訊\n------------------------',
		'color: yellow; font-size: 18px; font-weight: bold;',
	)
	$devLog('warn', '>>> 可以使用 $devLog 在開發環境下隨意 log <<<')
	$devLog('>>> Welcome to dash/example <<<')
	$devLog('error', '>> 每個跟組件都能拿到路由資訊(props) <<')
	$devLog(props)
	return (
		<ExampleProvider>
			<Content />
		</ExampleProvider>
	)
}

export default Example
