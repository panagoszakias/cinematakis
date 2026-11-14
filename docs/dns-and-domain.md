# DNS and domain (cinematakis.gr at papaki.com)

The domain is registered at papaki.com and uses papaki's nameservers (`dns1.papaki.gr`, `dns2.papaki.gr`). DNS records are edited in the papaki control panel. The site is served by GitHub Pages, and the `CNAME` file in the repo root tells GitHub which domain to serve.

## Records before the change (recorded on 2026-11-14)

| Name | Type | Value |
|------|------|-------|
| `@` (cinematakis.gr) | A | `195.110.124.140` |
| `www` | CNAME | `cinematakis.gr` |
| `@` | MX | `mail-gr.securemail.pro` |
| `@` | TXT | `v=spf1 a mx include:spf.webapps.net ~all` |
| `@` | NS | `dns1.papaki.gr`, `dns2.papaki.gr` |

## Records to have for GitHub Pages

| Name | Type | Value |
|------|------|-------|
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `@` | AAAA (optional) | `2606:50c0:8000::153` |
| `@` | AAAA (optional) | `2606:50c0:8001::153` |
| `@` | AAAA (optional) | `2606:50c0:8002::153` |
| `@` | AAAA (optional) | `2606:50c0:8003::153` |
| `www` | CNAME | `panagoszakias.github.io` |

Remove the old `A` record for `@` and the old `www` CNAME. **Keep** the MX, TXT and NS records. Do not add a trailing dot unless papaki's form asks for it. Check the IP addresses against GitHub's current documentation ("Managing a custom domain for your GitHub Pages site") before entering them.

## Notes

- The SPF record contains `a`, which refers to the domain's own A record. After the change, that means GitHub's addresses. This only matters for sending email as `info@cinematakis.gr`. When the mailbox is set up with papaki, check its instructions for the right SPF value.
- DNS changes can take from minutes to a few hours to spread.
- Never use a wildcard record (`*`) for this domain with GitHub Pages.

## Current state (verified 2026-11-14)

- The four `A` records and the `www` CNAME are in place, and the AAAA records were visible on public resolvers.
- The MX, TXT and NS records are unchanged.
- HTTPS works on both `https://cinematakis.gr/` and `https://www.cinematakis.gr/`. HTTP redirects to HTTPS, and `www` redirects to `cinematakis.gr`. The certificate is from Let's Encrypt and renews automatically.
- <https://panagoszakias.github.io/cinematakis/> redirects to `https://cinematakis.gr/`.

## How to roll back

Put the records from "before the change" back in the papaki panel. The domain then returns to papaki's parking page. Because the GitHub Pages site has `cinematakis.gr` as its custom domain, the `github.io` address redirects to the domain, so it will not show the site either. To view the site during a rollback, remove the custom domain in GitHub Settings > Pages, and delete the `CNAME` file from the repo.

## Reminders

- Turn on **auto-renewal** for `cinematakis.gr` in the papaki panel, and keep the payment details and the contact email on the account up to date. An expired domain takes the site down.
- Turn on **two-factor authentication** on your papaki and GitHub accounts.
- Optional: verify the domain in your GitHub account (**Settings > Pages > Add a domain**) by adding the TXT record GitHub shows you. This stops others from claiming the domain on GitHub Pages.

## Check it worked

```
nslookup cinematakis.gr
nslookup -type=cname www.cinematakis.gr
```

The first should list the four `185.199.x.153` addresses.
