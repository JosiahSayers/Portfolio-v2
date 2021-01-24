<script lang="ts">
    import Hero from "../../components/Hero.svelte";
    import HeroTitle from "../../components/HeroTitle.svelte";
    import ErrorNotification from "../../components/ErrorNotification.svelte";
    import Input from "./components/Input.svelte";

    import { LOGGER } from "src/logging/sidelog";
    import { ContactMeServce } from "./contact-api-service";
    import { modalService } from "src/components/modal/modal.service";
    import {
        formState,
        getEmail,
        getMessage,
        getName,
        isEmailValid,
        isMessageValid,
        isNameValid,
        resetForm,
        setEmail,
        setMessage,
        setName,
    } from "./contact-form-store";
    import { get } from "svelte/store";

    export let id: string;

    let formSubmitted = false;
    let apiCallInProgress = false;
    let apiCallFailed = false;

    function reset() {
        resetForm();
        formSubmitted = false;
        apiCallInProgress = false;
        apiCallFailed = false;
    }

    function submitHandler() {
        formSubmitted = true;
        const currentFormState = get(formState);

        if (currentFormState.isFormValid) {
            LOGGER.info("Contact form submitted", currentFormState);
            apiCallInProgress = true;
            ContactMeServce.submit({
                name: currentFormState.name,
                email: currentFormState.email,
                message: currentFormState.message,
            })
                .then(({ wasSuccessful }) => {
                    if (wasSuccessful) {
                        modalService.openModal(
                            "I'll be in touch with you shortly.",
                            "Contact Form Sent"
                        );
                        reset();
                    } else {
                        apiCallFailed = true;
                    }
                })
                .finally(() => (apiCallInProgress = false));
        } else {
            LOGGER.info(
                "Contact form submitted with invalid values",
                currentFormState
            );
        }
    }
</script>

<Hero {id} heroStyle="is-info">
    <HeroTitle>Contact Me</HeroTitle>

    <div class="columns">
        <form
            class="column is-two-thirds"
            on:submit|preventDefault={submitHandler}
        >
            <Input
                {formSubmitted}
                inputLabel="Your Name"
                id="name-input"
                isValid={isNameValid}
                errorMessage="Please enter your name"
                updateValue={(newValue) => setName(newValue)}
                valueChanges={getName}
            />

            <Input
                {formSubmitted}
                inputLabel="Your Email"
                id="email-input"
                isValid={isEmailValid}
                errorMessage="Please enter a valid email"
                updateValue={(newValue) => setEmail(newValue)}
                valueChanges={getEmail}
            />

            <Input
                {formSubmitted}
                inputLabel="Your Message"
                id="message-textarea"
                isValid={isMessageValid}
                errorMessage="Please enter a message"
                updateValue={(newValue) => setMessage(newValue)}
                valueChanges={getMessage}
            />

            <div class="field is-grouped">
                <div class="control">
                    <button
                        type="submit"
                        class="button is-link"
                        class:is-loading={apiCallInProgress}> Submit </button>
                </div>
            </div>

            {#if apiCallFailed}
                <ErrorNotification>
                    The form failed to send, please try again or feel free to
                    send me an email directly at
                    <a
                        href="mailto:josiah.sayers15@gmail.com?subject=josiahsayers.com Contact Me Form"
                        >josiah.sayers15@gmail.com</a
                    >
                </ErrorNotification>
            {/if}
        </form>
    </div>
</Hero>
