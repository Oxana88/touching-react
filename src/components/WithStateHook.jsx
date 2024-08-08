import React, { useState } from 'react'
import './Button/Button.css'
import DifferencesSection from './DifferencesSection'
import ProductSection from './ProductSection'
import TeachingSection from './TeachingSection'
export default function WithStateHook() {
	const [currentTab, setCurrentTab] = useState('tab1')
	const tabList = [
		{
			name: 'tab1',
			label: 'Tab 1',
			content: (
				<div className="tab-content">
					<h2>Tab content 1</h2>
					<TeachingSection />
				</div>
			),
		},
		{
			name: 'tab2',
			label: 'Tab 2',
			content: (
				<div className="tab-content">
					<h2>Products</h2>
					<ProductSection />
				</div>
			),
		},
		{
			name: 'tab3',
			label: 'Tab 3',
			content: (
				<div className="tab-content">
					<h2>Tab content 3</h2>
					<DifferencesSection />
				</div>
			),
		},
	]

	return (
		<div className="simple-tabs">
			<div className="tabs">
				{tabList.map((tab, i) => (
					<button
						key={i}
						onClick={() => setCurrentTab(tab.name)}
						className={tab.name === currentTab ? 'active button' : 'button'}
					>
						{tab.label}
					</button>
				))}
			</div>

			{tabList.map((tab, i) => {
				if (tab.name === currentTab) {
					return <div key={i}>{tab.content}</div>
				} else {
					return null
				}
			})}
		</div>
	)
}
