<script>
    import {base} from '$app/paths'
</script>

<div class="welcome__container">
    <div class="logos">
        <div class="logos__blur"/>
        <img alt="Svelte Logo" class="logos__entry" src="{base}/svelte.svg"/>
        <span class="logos__plus">+</span>
        <img alt="Sanity Logo" class="logos__entry" src="{base}/sanity.svg"/>
    </div>
    <div class="steps">
        <h2 class="steps__title">Next steps</h2>
        <ul class="steps__list">
            <li class="steps__entry">
                <h3 class="steps__subtitle">Publish a post in your Studio</h3>
                <p class="steps__text">Visit the Sanity Studio and publish a
                    new document of type post.</p>
            </li>
            <li class="steps__entry">
                <h3 class="step__title">Dive into the documentation</h3>
                <p class="steps__text">
                    Check out{' '}
                    <a href="https://www.sanity.io/docs" rel="noopener noreferrer nofollow"
                       target="_blank">
                        the documentation
                    </a>{' '}
                    to learn more about Sanity.
                </p>
            </li>
            <li class="steps__entry">
                <h3 class="steps__subtitle">Join the Sanity Community</h3>
                <p class="steps__text">
                    Leverage{' '}
                    <a
                            href="https://www.sanity.io/exchange/community"
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                    >
                        our awesome community
                    </a>
                    , and share tips and discuss!
                </p>
            </li>
        </ul>
    </div>
</div>
