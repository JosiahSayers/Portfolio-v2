<script lang="ts">
    import Hero from "../../components/Hero.svelte";
    import ErrorNotification from "../../components/ErrorNotification.svelte";

    import { LOGGER } from "src/logging/sidelog";
    import { ContactMeServce } from "./contact-api-service";
    import { modalService } from "src/components/modal/modal.service";
    
    export let id: string;

    let name: string;
    let email: string;
    let message: string;
    let formSubmitted = false;
    let apiCallInProgress = false;
    let apiCallFailed = false;

    $: isNameValid = () => !!name;
    $: isEmailValid = () => /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
    $: isMessageValid = () => !!message;

    function formSnapshot() {
        return {
            name,
            nameValid: isNameValid(),
            email,
            emailValid: isEmailValid(),
            message,
            messageValid: isMessageValid()
        };
    }

    function resetForm() {
        name = '';
        email = '';
        message = '';
        formSubmitted = false;
        apiCallInProgress = false;
        apiCallFailed = false;
    }

    function submitHandler(e) {
        formSubmitted = true;
        if (isNameValid() && isEmailValid() && isMessageValid()) {
            LOGGER.info('Contact form submitted', formSnapshot());
            apiCallInProgress = true;
            ContactMeServce.submit({ name, message, email })
                .then(() => {
                    modalService.openModal('I\'ll be in touch with you shortly.', 'Contact Form Sent');
                    resetForm();
                })
                .catch(() => apiCallFailed = true)
                .finally(() => apiCallInProgress = false);
        } else {
            LOGGER.info('Contact form submitted with invalid values', formSnapshot());
        }
    }
</script>

<Hero {id} heroStyle="is-info">
    <h1 class="title">Contact Me</h1>

    <div class="columns">
        <form class="column is-two-thirds" on:submit|preventDefault={submitHandler}>
            <div class="field">
                <label class="label" for="name-input">Your Name</label>
                <div class="control">
                    <input 
                        class="input"
                        class:is-danger={formSubmitted && !isNameValid()}
                        class:is-success={isNameValid()}
                        type="text"
                        placeholder="Your Name"
                        id="name-input" bind:value={name}
                    />
                </div>
                {#if formSubmitted && !isNameValid()}
                    <p class="help is-danger">Please enter your name</p>
                {/if}
            </div>

            <div class="field">
                <label class="label" for="email-input">Your Email</label>
                <div class="control">
                    <input
                        class="input"
                        class:is-danger={formSubmitted && !isEmailValid()}
                        class:is-success={isEmailValid()}
                        type="email"
                        placeholder="Your Email"
                        id="email-input"
                        bind:value={email}
                    />
                </div>
                {#if formSubmitted && !isEmailValid()}
                    <p class="help is-danger">Please enter your valid email</p>
                {/if}
            </div>

            <div class="field">
                <label class="label" for="message-textarea">Your Message</label>
                <div class="control">
                    <textarea
                        class="textarea"
                        class:is-danger={formSubmitted && !isMessageValid()}
                        class:is-success={isMessageValid()}
                        placeholder="Your Message"
                        id="message-textarea"
                        bind:value={message}
                    />
                </div>
                {#if formSubmitted && !isMessageValid()}
                    <p class="help is-danger">Please enter a message</p>
                {/if}
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button
                        type="submit"
                        class="button is-link"
                        class:is-loading={apiCallInProgress}
                    >
                        Submit
                    </button>
                </div>
            </div>
            
            {#if apiCallFailed}
                 <ErrorNotification>
                     The form failed to send, please try again or feel free to send me an email directly at 
                     <a href="mailto:josiah.sayers15@gmail.com?subject=josiahsayers.com Contact Me Form">josiah.sayers15@gmail.com</a>
                 </ErrorNotification>
            {/if}
        </form>
    </div>
</Hero>
