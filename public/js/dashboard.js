const dashboard = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-post').value.trim();
    const content = document.querySelector('#content-post').value.trim();
    

    if (content && title) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, content}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create project');
        }
    }
};


const showForm = async (event) => {
    document.querySelector('#newpost-form')
}


document
    .querySelector('#newpost-form')
    .addEventListener('submit', dashboard);


