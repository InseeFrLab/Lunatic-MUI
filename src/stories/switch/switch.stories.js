import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { titleDecorator } from '../utils/decorator';
import Orchestrator from '../utils/orchestrator';
import data from './data';

const stories = storiesOf('Switch', module).addDecorator((Component) => {
	const WrappedComponent = titleDecorator(Component);
	return <WrappedComponent title="<Switch />" />;
});

stories.addWithJSX('Default', () => (
	<Orchestrator id="default" source={data} />
));

function SwitchMaterialUI({
	checked,
	disabled,
	handleChange,
	statusLabel,
	labelId,
}) {
	const onClick = useCallback(
		function () {
			handleChange(!checked);
		},
		[checked, handleChange]
	);

	const { true: trueStatus, false: falseStatue } = statusLabel;
	return (
		<Stack direction="row" spacing={1} alignItems="center">
			<Typography>{falseStatue}</Typography>
			<Switch
				checked={checked}
				onClick={onClick}
				disabled={disabled}
				inputProps={{ 'aria-labelledby': labelId, 'aria-checked': checked }}
			/>
			<Typography>{trueStatus}</Typography>
		</Stack>
	);
}

export default SwitchMaterialUI;
