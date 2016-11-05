/* eslint-disable */

export default {
  'body-plain': `bjacobel commented on this pull request.

testing review for squirrelbot

> @@ -23,6 +23,7 @@ class SearchBox extends Component {
       <div className="search-box">
         <input
           placeholder="Search"
+          type="search"

should make sure this doesn't look super weird in Safari

> @@ -53,10 +52,18 @@ class TagBox extends Component {

       tagBoxContents = (
         <div>
-          <p className="gif-name copy-icon" onMouseUp={ clip }>
-            <span className="sliding-ul">
-              <span className="lightgrey">{ ROOT_URL }</span>
-              { activeGif.src }
+          <input
+            type="text"
+            className="gif-fullname-hidden"
+            value={ ROOT_URL + activeGif.src }

Just testing a new-style review for Squirrelbot

_this should be_

\`\`\`
code
block
\`\`\`

see a [link](https://github.com/bjacobel/gifs/pull/17/commits/fd584faa5a7f312f4373a301acac73762068c2a6#diff-560bfefb7832bf845febdb13e6f336feR66)

> -  input.value = text;
-  input.focus();
-  input.setSelectionRange(0, text.length);
-  document.execCommand('copy');
-  document.body.removeChild(input);
+export const copy = () => {
+  document.getSelection().removeAllRanges();
+
+  const copyInput = document.querySelector('.gif-fullname-hidden');
+  copyInput.focus();
+  copyInput.setSelectionRange(0, copyInput.value.length);
+
+  if (document.queryCommandSupported('copy') && document.execCommand('copy')) {
+    return true;
+  } else {
+    throw new Error('Copying not supported in your browser');

asdf

> @@ -1,6 +1,7 @@
 @import 'vars.css';
 @import 'colors.css';
 @import 'app.css';
+@import 'mobile.css';

asfdafa

--
You are receiving this because you are subscribed to this thread.
Reply to this email directly or view it on GitHub:\r
https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735`,
  'body-html': `<p><b>@bjacobel</b> commented on this pull request.</p>

<p>testing review for squirrelbot</p><hr>

<p>In <a href="https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735">src/components/SearchBox.js</a>:</p>
<pre style='color:#555'>&gt; @@ -23,6 +23,7 @@ class SearchBox extends Component {
       &lt;div className=&quot;search-box&quot;&gt;
         &lt;input
           placeholder=&quot;Search&quot;
+          type=&quot;search&quot;
</pre>
<p>should make sure this doesn't look super weird in Safari</p>

<hr>

<p>In <a href="https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735">src/components/TagBox.js</a>:</p>
<pre style='color:#555'>&gt; @@ -53,10 +52,18 @@ class TagBox extends Component {

       tagBoxContents = (
         &lt;div&gt;
-          &lt;p className=&quot;gif-name copy-icon&quot; onMouseUp={ clip }&gt;
-            &lt;span className=&quot;sliding-ul&quot;&gt;
-              &lt;span className=&quot;lightgrey&quot;&gt;{ ROOT_URL }&lt;/span&gt;
-              { activeGif.src }
+          &lt;input
+            type=&quot;text&quot;
+            className=&quot;gif-fullname-hidden&quot;
+            value={ ROOT_URL + activeGif.src }
</pre>
<p>Just testing a new-style review for Squirrelbot</p>

<p><em>this should be</em></p>

<pre><code>code
block
</code></pre>

<p>see a <a href="https://github.com/bjacobel/gifs/pull/17/commits/fd584faa5a7f312f4373a301acac73762068c2a6#diff-560bfefb7832bf845febdb13e6f336feR66">link</a></p>

<hr>

<p>In <a href="https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735">src/services/clipboard.js</a>:</p>
<pre style='color:#555'>&gt; -  input.value = text;
-  input.focus();
-  input.setSelectionRange(0, text.length);
-  document.execCommand(&#39;copy&#39;);
-  document.body.removeChild(input);
+export const copy = () =&gt; {
+  document.getSelection().removeAllRanges();
+
+  const copyInput = document.querySelector(&#39;.gif-fullname-hidden&#39;);
+  copyInput.focus();
+  copyInput.setSelectionRange(0, copyInput.value.length);
+
+  if (document.queryCommandSupported(&#39;copy&#39;) &amp;&amp; document.execCommand(&#39;copy&#39;)) {
+    return true;
+  } else {
+    throw new Error(&#39;Copying not supported in your browser&#39;);
</pre>
<p>asdf</p>

<hr>

<p>In <a href="https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735">src/stylesheets/index.css</a>:</p>
<pre style='color:#555'>&gt; @@ -1,6 +1,7 @@
 @import &#39;vars.css&#39;;
 @import &#39;colors.css&#39;;
 @import &#39;app.css&#39;;
+@import &#39;mobile.css&#39;;
</pre>
<p>asfdafa</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AAY4VxinU9qIjaAZ2-3Dbt2-uDkARv7Qks5qrBZOgaJpZM4J6Gq6">mute the thread</a>.<img alt="" height="1" src="https://github.com/notifications/beacon/AAY4V9Ix_pMmbdUFGr11mAVD8ZtAp42Bks5qrBZOgaJpZM4J6Gq6.gif" width="1" /></p>
<div itemscope itemtype="http://schema.org/EmailMessage">
<div itemprop="action" itemscope itemtype="http://schema.org/ViewAction">
  <link itemprop="url" href="https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735"></link>
  <meta itemprop="name" content="View Pull Request"></meta>
</div>
<meta itemprop="description" content="View this Pull Request on GitHub"></meta>
</div>

<script type="application/json" data-scope="inboxmarkup">{"api_version":"1.0","publisher":{"api_key":"05dde50f1d1a384dd78767c55493e4bb","name":"GitHub"},"entity":{"external_key":"github/bjacobel/gifs","title":"bjacobel/gifs","subtitle":"GitHub repository","main_image_url":"https://cloud.githubusercontent.com/assets/143418/17495839/a5054eac-5d88-11e6-95fc-7290892c7bb5.png","avatar_image_url":"https://cloud.githubusercontent.com/assets/143418/15842166/7c72db34-2c0b-11e6-9aed-b52498112777.png","action":{"name":"Open in GitHub","url":"https://github.com/bjacobel/gifs"}},"updates":{"snippets":[{"icon":"PERSON","message":"@bjacobel reviewed #17"}],"action":{"name":"View Pull Request","url":"https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735"}}}</script>`,
  subject: 'test',
  from: 'Brian Jacobel <brian@bjacobel.com>',
  parsed: `bjacobel commented on this pull request.

testing review for squirrelbot

\`\`\`\r
@@ -23,6 +23,7 @@ class SearchBox extends Component {
       <div className="search-box">
         <input
           placeholder="Search"
+          type="search"
\`\`\`\r

should make sure this doesn't look super weird in Safari

\`\`\`\r
@@ -53,10 +52,18 @@ class TagBox extends Component {

       tagBoxContents = (
         <div>
-          <p className="gif-name copy-icon" onMouseUp={ clip }>
-            <span className="sliding-ul">
-              <span className="lightgrey">{ ROOT_URL }</span>
-              { activeGif.src }
+          <input
+            type="text"
+            className="gif-fullname-hidden"
+            value={ ROOT_URL + activeGif.src }
\`\`\`\r

Just testing a new-style review for Squirrelbot

_this should be_

\`\`\`
code
block
\`\`\`

see a <https://github.com/bjacobel/gifs/pull/17/commits/fd584faa5a7f312f4373a301acac73762068c2a6#diff-560bfefb7832bf845febdb13e6f336feR66|link>

\`\`\`\r
-  input.value = text;
-  input.focus();
-  input.setSelectionRange(0, text.length);
-  document.execCommand('copy');
-  document.body.removeChild(input);
+export const copy = () => {
+  document.getSelection().removeAllRanges();
+
+  const copyInput = document.querySelector('.gif-fullname-hidden');
+  copyInput.focus();
+  copyInput.setSelectionRange(0, copyInput.value.length);
+
+  if (document.queryCommandSupported('copy') && document.execCommand('copy')) {
+    return true;
+  } else {
+    throw new Error('Copying not supported in your browser');
\`\`\`\r

asdf

\`\`\`\r
@@ -1,6 +1,7 @@
 @import 'vars.css';
 @import 'colors.css';
 @import 'app.css';
+@import 'mobile.css';
\`\`\`\r

asfdafa

`,
}
