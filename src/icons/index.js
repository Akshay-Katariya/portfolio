export const Icons = {
	Skills: 'keyboard_alt',
	Project: 'important_devices',
	Work: 'business_center',
	Contact: 'person',

	Menu: 'widgets',
	Close: 'cancel',

	Download: 'file_download',
	Email: 'mail',

	ArrowRight: 'keyboard_arrow_right',
	ArrowUp: 'arrow_back_ios_new',
}

export const GoogleIcons = ({ name, margin, normal }) => (
	<span translate='no' className={margin ? `material-symbols-rounded google-icon` : 'material-symbols-rounded'}>
		{name}
	</span>
)
