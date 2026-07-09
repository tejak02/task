const API_KEY = "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";

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        sendMessage();
    }
});

function addMessage(message,type){

    const div=document.createElement("div");

    div.className=type;

    div.innerHTML=message;

    chatBox.appendChild(div);

    chatBox.scrollTop=chatBox.scrollHeight;
}

async function sendMessage(){

    const message=input.value.trim();

    if(message===""){
        return;
    }

    addMessage(message,"user");

    input.value="";

    const typing=document.createElement("div");
    typing.className="bot";
    typing.id="typing";
    typing.innerHTML="Typing...";
    chatBox.appendChild(typing);

    chatBox.scrollTop=chatBox.scrollHeight;

    try{

        const response=await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method:"POST",

                headers:{
                    "Authorization":"Bearer "+API_KEY,
                    "Content-Type":"application/json",
                    "HTTP-Referer":"http://localhost:5500",
                    "X-Title":"AI ChatBot"
                },

                body:JSON.stringify({

                    model:"openai/gpt-4o-mini",

                    messages:[
                        {
                            role:"system",
                            content:"You are a helpful AI assistant."
                        },
                        {
                            role:"user",
                            content:message
                        }
                    ]

                })

            }
        );

        const data=await response.json();

        document.getElementById("typing").remove();

        if(!response.ok){

            addMessage("Error : "+JSON.stringify(data),"bot");

            console.log(data);

            return;
        }

        addMessage(data.choices[0].message.content,"bot");

    }

    catch(error){

        document.getElementById("typing").remove();

        addMessage("Network Error","bot");

        console.log(error);

    }

}