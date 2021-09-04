import ProgressBar from "@ramonak/react-progress-bar"


const ProgressBarWrapper = (props) => {
    return( 
        <ProgressBar completed={props.completed} bgColor={props.bg}
                  height="10px" baseBgColor={props.baseBg}
                  labelAlignment="center"
                  labelColor="aliceblue"
                  isLabelVisible={false} />
    )
}

export default ProgressBarWrapper