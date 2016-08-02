# emp-component-save-cancel

```jsx
import { SaveCancel } from "emp-component-save-cancel";

export default function App(props){
    return <div>
        <SaveCancel 
            onSave={props.handleSave} 
            onCancel={props.handleCancel}>
            <div>
                <label>
                    <span>Mission Success?</span>
                    <input type="checkbox" checked={props.success} /> 
                </label>
            </div>
        </SaveCancel>
    </div>;
}
```