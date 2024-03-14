import {useForm} from '../hooks'


export const TodoAdd = ({onNewTodo}) => {
    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if( description.length <= 1 ) return;
        onNewTodo({
            id: new Date().getTime() * 4,
            todo: description,
            done: false
        });
        onResetForm();
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                name="description"
                value={description}
                placeholder="¿Que hay que hacer?"
                className="form-control"
                onChange={onInputChange}
            />
            
            <button 
                type="submit"
                className="btn btn-outline-primary mt-3"
            >
                Cargar
            </button>
        </form>
    )
}
