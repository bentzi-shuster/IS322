const Form = ({data}) => {
    return (
        <div className="flex justify-center items-center md:w-1/3 sm:w-5/6 w-full mx-auto my-10">
        <form action={data.action} method={data.method} className="card-body bg-primary-800 shadow-2xl dark:bg-primary-900 ">
            <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
       {data.formdata.map((item, index) => {
              return (
                <div key={index} className="form-control">
                 
                    {item.type === "text" ? (<>                    
                        <label className="label"
                             htmlFor={item.name}>
                                <span className="label-text">{item.label}</span>
                                
                                </label>
                        <input type="text" name={item.name} className="input input-bordered"
                        required={item.required??false}
                        />
                        </>
                    ) : null}
                    {item.type === "password" ? (<>                    
                        <label className="label" 
                            htmlFor={item.name}> <span className="label-text">{item.label}</span>
                            </label>
                        <input  className="input input-bordered"
                        required={item.required??false}
                        type="password" name={item.name} />
                        </>
                    ) : null}
                    {item.type === "textarea" ? <textarea name={item.name}
                    required={item.required??false}
                    className="textarea h-24 textarea-bordered"
                    >{item.value}</textarea> : null}
                     
                    {item.type==="button" &&item.formAction ? (
                        <button type={item.btnType} formAction={item.formAction} onClick={item.onClick} className="btn btn-primary">
                            {item.value}
                        </button>
                    ) : null}
                    {item.type==="button" &&!item.formAction ? (
                        <button onClick={item.onClick} className="btn btn-primary hover:bg-primary-700" 
                         type={item.btnType}>
                            {item.value}
                        </button>
                    ) : null}
                    
                    {item.type==="radio" ? (
                        <>                       
                       {item.options.map((option, index) => {
                            return (
                                 <div key={index}>
                                      <input type="radio" name={item.name} value={option.value} required={item.required??false} className="radio" />
                                      <label htmlFor={option.value}>{option.label}</label>
                                 </div>
                            )

                       }
                          )}    
                        </>
                    ) : null}
                    {item.type==="link" ? (
                        <>
                        <a href={item.href} className="link link-neutral  hover:text-primary-400
                        ">{item.value}</a>
                        </>
                    ) : null}
                </div>
              )
       })}
        </form>
        </div>
    );
};
export default Form;
