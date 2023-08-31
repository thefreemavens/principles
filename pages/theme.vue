<template>
  <div class="container min-h-screen mx-auto pt-20 px-2 font-body">
    <dl>
      <dt><UBadge label="a"/></dt>
      <!--<dd>hyperlink</dd>-->
      <dd><a href="#0">Lorem ipsum</a></dd>
    </dl>

    <dl>
      <dt><UBadge label="abbr" /></dt>
      <!--<dd>abbreviation</dd>-->
      <dd><abbr title="Hypertext Markup Language">HTML</abbr></dd>
    </dl>

    <dl>
      <dt><UBadge label="address" /></dt>
      <!--<dd>contact information</dd>-->
      <dd>
        <address>
          <a href="#0">Jane Doe</a>,
          <a href="#0">John Smith</a>,
          contact persons for the <a href="#0">Tomfoolery Initiative</a>
        </address>
      </dd>
    </dl>

    <!-- area &ndash; image-map hyperlink -->
    <!-- article &ndash; article -->
    <!-- aside &ndash; tangential content -->

    <dl>
      <dt><UBadge label="audio" /></dt>
      <!--<dd>audio stream</dd>-->
      <dd>
        <audio controls src="http://upload.wikimedia.org/wikipedia/commons/6/6f/Florence_Nightingale_voice_-_1576A_2nd_Rendition_Crop.ogg">
          Your browser does not support the <code>audio</code> element.
        </audio>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="b" /></dt>
      <!--<dd>offset text conventionally styled in bold</dd>-->
      <dd><b>Lorem ipsum</b></dd>
    </dl>

    <!-- base &ndash; base URL -->
    <!-- bdi &ndash; BiDi isolate -->
    <!-- bdo &ndash; BiDi override -->

    <dl>
      <dt><UBadge label="blockquote" /></dt>
      <!--<dd>block quotation</dd>-->
      <dd>
        <blockquote>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <cite>&ndash; John Doe (@jdoe) <a href="https://twitter.com/jdoe/statuses/9999999999999999">June 1st, 2014</a></cite>
        </blockquote>
      </dd>
    </dl>

    <!-- body &ndash; document body -->
    <!-- br &ndash; line break -->

    <dl>
      <dt><UBadge label="button" /></dt>
      <!--<dd>button</dd>-->
      <dd><button>Button</button></dd>
      <dd><button disabled>Disabled Button</button></dd>
      <dd><button type="submit">Submit Button</button></dd>
      <dd><button type="reset">Reset Button</button></dd>
      <dd><button type="button">Button Button</button></dd>
    </dl>

    <!-- button type=submit &ndash; submit button -->
    <!-- button type=reset &ndash; reset button -->
    <!-- button type=button &ndash; button with no additional semantics -->
    <!-- canvas &ndash; canvas for dynamic graphics -->
    <!-- caption &ndash; table title -->

    <dl>
      <dt><UBadge label="cite" /></dt>
      <!--<dd>cited title of a work</dd>-->
      <dd>
        More information can be found in <cite>[ISO-0000]</cite>.
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="code" /></dt>
      <!--<dd>code fragment</dd>-->
      <dd>
        <code>&lt;h1>Hello, World!&lt;h1></code>
      </dd>
    </dl>

    <!-- col &ndash; table column -->
    <!-- colgroup &ndash; table column group -->
    <!-- command &ndash; command -->
    <!-- command type=command &ndash; command with an associated action -->
    <!-- command type=radio &ndash; selection of one item from a list of items -->
    <!-- command type=checkbox &ndash; state or option that can be toggled -->
    <!-- datalist &ndash; predefined options for other controls -->
    <!-- dd &ndash; description or value -->

    <dl>
      <dt><UBadge label="del" /></dt>
      <!--<dd>deleted text</dd>-->
      <dd>
        The show is on <del>Oct. 14th</del> November 2nd.
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="details" /></dt>
      <!--<dd>control for additional on-demand information</dd>-->
      <dd>
        <details>
          <summary>Summary</summary>
          <p>Details. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </details>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="dfn" /></dt>
      <!--<dd>defining instance</dd>-->
      <dd>
        <dfn>The Internet</dfn> is a global system of interconnected networks that use the Internet Protocol Suite (TCP/IP) to serve billions of users worldwide.
      </dd>
    </dl>

    <!-- div &ndash; generic flow container -->

    <dl>
      <dt><UBadge label="dl" /></dt>
      <!--<dd>description list</dd>-->
      <dd>
        <dl>
          <dt>Center</dt>
          <dt>Centre</dt>
          <dd>A point equidistant from all points on the surface of a sphere.</dd>
          <dd>In some field sports, the player who holds the middle position on the field, court, or forward line.</dd>
        </dl>
      </dd>
    </dl>

    <!-- dt &ndash; term or name -->

    <dl>
      <dt><UBadge label="em" /></dt>
      <!--<dd>emphatic stress</dd>-->
      <dd>Lorem ipsum <em>dolor sit</em> amet.</dd>
    </dl>

    <!-- embed &ndash; integration point for plugins -->

    <dl>
      <dt><UBadge label="fieldset" /></dt>
      <!--<dd>set of related form controls</dd>-->
      <dd>
        <fieldset>
          <legend>Legend</legend>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra sodales massa eu feugiat. Duis nisi nibh, lacinia a ultrices commodo, mattis et dui.
        </fieldset>
      </dd>
    </dl>

    <!-- figcaption &ndash; figure caption -->

    <dl>
      <dt><UBadge label="figure" /></dt>
      <!--<dd>figure with optional caption</dd>-->
      <dd>
        <figure>
          <img src="http://placekitten.com/240" />
          <figcaption>a cute kitten</figcaption>
        </figure>
      </dd>
    </dl>

    <!-- footer &ndash; footer -->
    <!-- form &ndash; user-submittable form -->

    <dl>
      <dt><UBadge label="h1" /></dt>
      <dd></dd>
      <dd><h1>Header 1</h1></dd>
    </dl>

    <dl>
      <dt><UBadge label="h2" /></dt>
      <!--<dd>heading</dd>-->
      <dd><h2>Header 2</h2></dd>
    </dl>

    <dl>
      <dt><UBadge label="h3" /></dt>
      <!--<dd>heading</dd>-->
      <dd><h3>Header 3</h3></dd>
    </dl>

    <dl>
      <dt><UBadge label="h4" /></dt>
      <!--<dd>heading</dd>-->
      <dd><h4>Header 4</h4></dd>
    </dl>

    <dl>
      <dt><UBadge label="h5" /></dt>
      <!--<dd>heading</dd>-->
      <dd><h5>Header 5</h5></dd>
    </dl>

    <dl>
      <dt><UBadge label="h6" /></dt>
      <!--<dd>heading</dd>-->
      <dd><h6>Header 6</h6></dd>
    </dl>

    <!-- head &ndash; document metadata container -->
    <!-- header &ndash; header -->
    <!-- hgroup &ndash; heading group -->

    <dl>
      <dt><UBadge label="hr" /></dt>
      <!--<dd>thematic break</dd>-->
      <dd><hr /></dd>
    </dl>

    <!-- html &ndash; root element -->

    <dl>
      <dt><UBadge label="i" /></dt>
      <!--<dd>offset text conventionally styled in italic</dd>-->
      <dd><i>italics</i></dd>
    </dl>

    <dl>
      <dt><UBadge label="iframe" /></dt>
      <!--<dd>nested browsing context (inline frame)</dd>-->
      <dd><iframe></iframe></dd>
    </dl>

    <dl>
      <dt><UBadge label="img" /></dt>
      <!--<dd>image</dd>-->
      <dd><img src="http://placekitten.com/240" alt="a cute kitten" title="it's a cute frakkin' kitten" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input" /></dt>
      <!--<dd>input control</dd>-->
      <dd><input /></dd>
      <dd><input placeholder="With placeholder" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=text" /></dt>
      <!--<dd>text-input field</dd>-->
      <dd><input type="text" placeholder="Text Input" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=password" /></dt>
      <!--<dd>password-input field</dd>-->
      <dd><input type="password" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=checkbox" /></dt>
      <!--<dd>checkbox</dd>-->
      <dd><input type="checkbox" /></dd>
      <dd><input type="checkbox" checked /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=radio" /></dt>
      <!--<dd>radio button</dd>-->
      <dd><input type="radio" /></dd>
      <dd><input type="radio" checked /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=button" /></dt>
      <!--<dd>button</dd>-->
      <dd><input type="button" value="button" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=submit" /></dt>
      <!--<dd>submit button</dd>-->
      <dd><input type="submit" value="submit" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=reset" /></dt>
      <!--<dd>reset button</dd>-->
      <dd><input type="reset" value="reset" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=file" /></dt>
      <!--<dd>file upload control</dd>-->
      <dd><input type="file" /></dd>
    </dl>

    <!-- input type=hidden &ndash; hidden input control -->

    <dl>
      <dt><UBadge label="input type=image" /></dt>
      <!--<dd>image-coordinates input control</dd>-->
      <dd><input type="image" src="http://placekitten.com/120" alt="a cute kitten button" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=datetime" /></dt>
      <!--<dd>global date-and-time input control</dd>-->
      <dd><input type="datetime" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=datetime-local" /></dt>
      <!--<dd>local date-and-time input control</dd>-->
      <dd><input type="datetime-local" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=date" /></dt>
      <!--<dd>date input control</dd>-->
      <dd><input type="date" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=month" /></dt>
      <!--<dd>year-and-month input control</dd>-->
      <dd><input type="month" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=time" /></dt>
      <!--<dd>time input control</dd>-->
      <dd><input type="time" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=week" /></dt>
      <!--<dd>year-and-week input control</dd>-->
      <dd><input type="week" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=number" /></dt>
      <!--<dd>number input control</dd>-->
      <dd><input type="number" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=range" /></dt>
      <!--<dd>imprecise number-input control</dd>-->
      <dd><input type="range" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=email" /></dt>
      <!--<dd>e-mail address input control</dd>-->
      <dd><input type="email" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=url" /></dt>
      <!--<dd>URL input control</dd>-->
      <dd><input type="url" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=search" /></dt>
      <!--<dd>search field</dd>-->
      <dd><input type="search" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=tel" /></dt>
      <!--<dd>telephone-number-input field</dd>-->
      <dd><input type="tel" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="input type=color" /></dt>
      <!--<dd>color-well control</dd>-->
      <dd><input type="color" /></dd>
    </dl>

    <dl>
      <dt><UBadge label="ins" /></dt>
      <!--<dd>inserted text</dd>-->
      <dd>Lorem ipsum <ins>dolor sit</ins> amet.</dd>
    </dl>

    <!-- kbd &ndash; user input -->
    <!-- keygen &ndash; key-pair generator/input control -->

    <dl>
      <dt><UBadge label="label" /></dt>
      <!--<dd>caption for a form control</dd>-->
      <dd>Lorem ipsum <label>dolor sit</label> amet.</dd>
    </dl>

    <!-- legend &ndash; title or explanatory caption -->
    <!-- li &ndash; list item -->
    <!-- link &ndash; inter-document relationship metadata -->
    <!-- map &ndash; image-map definition -->

    <dl>
      <dt><UBadge label="mark" /></dt>
      <!--<dd>marked (highlighted) text</dd>-->
      <dd>Lorem ipsum <mark>dolor sit</mark> amet.</dd>
    </dl>

    <dl>
      <dt><UBadge label="menu" /></dt>
      <!--<dd>list of commands</dd>-->
      <dd>
        <menu type="toolbar">
          <li>
          <menu label="File">
            <button type="button" onclick="fnew()">New...</button>
            <button type="button" onclick="fopen()">Open...</button>
            <button type="button" onclick="fsave()">Save</button>
            <button type="button" onclick="fsaveas()">Save as...</button>
          </menu>
          </li>
          <li>
          <menu label="Edit">
            <button type="button" onclick="ecopy()">Copy</button>
            <button type="button" onclick="ecut()">Cut</button>
            <button type="button" onclick="epaste()">Paste</button>
          </menu>
          </li>
          <li>
          <menu label="Help">
            <li><a href="help.html">Help</a></li>
            <li><a href="about.html">About</a></li>
          </menu>
          </li>
        </menu>
      </dd>
    </dl>

    <!-- meta &ndash; metadata -->
    <!-- meta name &ndash; name-value metadata -->
    <!-- meta http-equiv=refresh &ndash; ÒrefreshÓ pragma directive -->
    <!-- meta http-equiv=default-style &ndash; Òpreferred stylesheetÓ pragma directive -->
    <!-- meta charset &ndash; document character-encoding declaration -->
    <!-- meta http-equiv=content-type &ndash; document character-encoding declaration -->

    <dl>
      <dt><UBadge label="meter" /></dt>
      <!--<dd>scalar gauge</dd>-->
      <dd>
        <meter min="200" max="500" value="350">350 degrees</meter>
        <meter low="69" high="80" max="100" value="84">B</meter>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="nav" /></dt>
      <!--<dd>group of navigational links</dd>-->
      <dd>
        <nav>
          <ul>
            <li><a href="#0" title="Lorum ipsum dolor sit amet">Lorem</a></li>
            <li><a href="#0" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
            <li><a href="#0" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
            <li><a href="#0" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
            <li><a href="#0" title="Pellentesque fermentum dolor">Pellentesque</a></li>
          </ul>
        </nav>
      </dd>
    </dl>

    <!-- noscript &ndash; fallback content for script -->
    <!-- object &ndash; generic external content -->

    <dl>
      <dt><UBadge label="ol" /></dt>
      <!--<dd>ordered list</dd>-->
      <dd>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
        </ol>
      </dd>
    </dl>

    <!-- optgroup &ndash; group of options -->
    <!-- option &ndash; option -->

    <dl>
      <dt><UBadge label="output" /></dt>
      <!--<dd>result of a calculation in a form</dd>-->
      <dd>
        <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
          <input type="range" name="b" value="50" /> +
          <input type="number" name="a" value="10" /> =
          <output name="result"></output>
        </form>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="p" /></dt>
      <!--<dd>paragraph</dd>-->
      <dd>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      </dd>
    </dl>

    <!-- param &ndash; initialization parameters for plugins -->

    <dl>
      <dt><UBadge label="pre" /></dt>
      <!--<dd>preformatted text</dd>-->
      <dd>
        <pre>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</pre>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="progress" /></dt>
      <!--<dd>progress indicator</dd>-->
      <dd>
        <progress max="100" value="66"></progress>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="q" /></dt>
      <!--<dd>quoted text</dd>-->
      <dd>Lorem ipsum <q>dolor sit</q> amet.</dd>
      <dd><q>Lorem ipsum <q>dolor sit</q> amet.</q></dd>
    </dl>

    <!-- rp &ndash; ruby parenthesis -->
    <!-- rt &ndash; ruby text -->
    <!-- ruby &ndash; ruby annotation -->
    <dl>
      <dt><UBadge label="s" /></dt>
      <!--<dd>struck text</dd>-->
      <dd>Lorem ipsum <s>dolor sit</s> amet.</dd>
    </dl>

    <dl>
      <dt><UBadge label="samp" /></dt>
      <!--<dd>(sample) output</dd>-->
      <dd>
        Lorem ipsum <samp>dolor sit</samp> amet.
      </dd>
    </dl>

    <!-- script &ndash; embedded script -->
    <!-- section &ndash; section -->

    <dl>
      <dt><UBadge label="select" /></dt>
      <!--<dd>option-selection form control</dd>-->
      <dd>
        <select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </select>
      </dd>
      <dd>
        <select multiple>
          <option>Please select</option>
          <optgroup label="Group 1">
            <option value="1.1">Option 1.1</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="2.1">Option 2.1</option>
            <option value="2.2">Option 2.2</option>
          </optgroup>
          <optgroup label="Group 3" disabled>
            <option value="3.1">Option 3.1</option>
            <option value="3.2">Option 3.2</option>
            <option value="3.3">Option 3.3</option>
          </optgroup>
        </select>
      </dd>
      <dd>
        <select>
          <option>Please select</option>
          <optgroup label="Group 1">
            <option value="1.1">Option 1.1</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="2.1">Option 2.1</option>
            <option value="2.2">Option 2.2</option>
          </optgroup>
          <optgroup label="Group 3" disabled>
            <option value="3.1">Option 3.1</option>
            <option value="3.2">Option 3.2</option>
            <option value="3.3">Option 3.3</option>
          </optgroup>
        </select>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="small" /></dt>
      <!--<dd>small print</dd>-->
      <dd>
        <small>Small ipsum</small>
      </dd>
    </dl>

    <!-- source &ndash; media source -->
    <!-- span &ndash; generic span -->

    <dl>
      <dt><UBadge label="strong" /></dt>
      <!--<dd>strong importance</dd>-->
      <dd>
        <strong>Strong ipsum</strong>
      </dd>
    </dl>

    <!-- style &ndash; style (presentation) information -->

    <dl>
      <dt><UBadge label="sub" /></dt>
      <!--<dd>subscript</dd>-->
      <dd>
        H<sub>2</sub>O
      </dd>
    </dl>

    <!-- summary &ndash; summary, caption, or legend for a details control -->

    <dl>
      <dt><UBadge label="sup" /></dt>
      <!--<dd>superscript</dd>-->
      <dd>
        E=MC<sup>2</sup>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="table" /></dt>
      <!--<dd>table</dd>-->
      <dd>
        <table>
          <caption>Table caption</caption>
          <thead>
            <tr>
              <th>Table Header 1</th>
              <th>Table Header 2</th>
              <th>Table Header 3</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colspan="3">Table footer</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Division 1</td>
              <td>Division 2</td>
              <td>Division 3</td>
            </tr>
            <tr>
              <td>Division 1</td>
              <td>Division 2</td>
              <td>Division 3</td>
            </tr>
            <tr>
              <td>Division 1</td>
              <td>Division 2</td>
              <td>Division 3</td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>

    <!-- tbody &ndash; table row group -->
    <!-- td &ndash; table cell -->

    <dl>
      <dt><UBadge label="textarea" /></dt>
      <!--<dd>text input area</dd>-->
      <dd>
        <textarea>Placeholder</textarea>
      </dd>
    </dl>

    <!-- tfoot &ndash; table footer row group -->
    <!-- th &ndash; table header cell -->
    <!-- thead &ndash; table heading group -->
    <!-- time &ndash; date and/or time -->
    <!-- title &ndash; document title -->
    <!-- tr &ndash; table row -->
    <!-- track &ndash; supplementary media track -->

    <dl>
      <dt><UBadge label="u" /></dt>
      <!--<dd>offset text conventionally styled with an underline</dd>-->
      <dd>
        <u>Lorem ipsum</u>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="ul" /></dt>
      <!--<dd>unordered list</dd>-->
      <dd>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
        </ul>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="var" /></dt>
      <!--<dd>variable or placeholder text</dd>-->
      <dd>
        <var>Variable</var>
      </dd>
    </dl>

    <dl>
      <dt><UBadge label="video" /></dt>
      <!--<dd>video</dd>-->
      <dd>
        <video controls src="http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv" poster="http://placehold.it/160x90%26text=poster+image">
          Your browser doesn't support the <code>video</code> element.
          You can <a href="http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv">download the video</a> instead.
        </video>
      </dd>
    </dl>
  </div>
</template>

<script setup lang="js">

</script>

<style>
dl {
  @apply mt-8 mb-2;
  dt {
    @apply mb-4;
  }
  dd {
    @apply px-8;
  }
}
</style>
