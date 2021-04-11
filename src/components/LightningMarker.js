import { Icon, InlineIcon } from '@iconify/react';
import bxCloudLightning from '@iconify-icons/bx/bx-cloud-lightning';

const LightningMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="lightning-marker" onClick={onClick}>
            <Icon icon={bxCloudLightning} className="lightning-icon" />
        </div>
    )
}

export default LightningMarker;